from typing import List
from fastapi import FastAPI, HTTPException
from experiment.models import RetailRequirement
from experiment.database import get_db


class RetailRequirementService:
    def __init__(self, db):
        self.db = db

    async def get_retail_requirements_list(self, retailer_id: str) -> List[RetailRequirement]:
        # This will query the database for all retail requirements for the given retailer and return a list of RetailRequirement objects
        retail_requirements = await self.db.retail_requirements.find({"retailer_id": retailer_id}).to_list(length=100)
        return [RetailRequirement(**retail_requirement) for retail_requirement in retail_requirements]

    async def get_retail_requirement(self, retailer_id: str, requirement_id: str) -> RetailRequirement:
        # This will query the database for the retail requirement with the given ID and return the RetailRequirement object
        retail_requirement = await self.db.retail_requirements.find_one({"retailer_id": retailer_id, "id": requirement_id})
        if not retail_requirement:
            raise HTTPException(status_code=404, detail="Retail requirement not found")
        return RetailRequirement(**retail_requirement)

    async def create_retail_requirement(self, retailer_id: str, retail_requirement: RetailRequirement) -> RetailRequirement:
        # This will insert a new retail requirement document into the database and return the RetailRequirement object
        await self.db.retail_requirements.insert_one(retail_requirement.dict())
        return retail_requirement

    async def update_retail_requirement(self, retailer_id: str, requirement_id: str, retail_requirement: RetailRequirement) -> RetailRequirement:
        # This will update the retail requirement with the given ID with the new data
        await self.db.retail_requirements.update_one({"retailer_id": retailer_id, "id": requirement_id}, retail_requirement.dict())
        return retail_requirement

    async def delete_retail_requirement(self, retailer_id: str, requirement_id: str) -> None:
        # This will delete the retail requirement with the given ID from the database
        await self.db.retail_requirements.delete_one({"retailer_id": retailer_id, "id": requirement_id})


app = FastAPI()

# This will inject the database object into the RetailRequirementService class
retail_requirement_service = RetailRequirementService(get_db())

# This will create the routes for the RetailRequirementService class
@app.post("/retailers/<retailer_id>/requirements")
async def create_retail_requirement(retailer_id: str, retail_requirement: RetailRequirement):
    return await retail_requirement_service.create_retail_requirement(retailer_id, retail_requirement)

@app.get("/retailers/<retailer_id>/requirements")
async def get_retail_requirements(retailer_id: str):
    return await retail_requirement_service.get_retail_requirements_list(retailer_id)

@app.get("/retailers/<retailer_id>/requirements/<requirement_id>")
async def get_retail_requirement(retailer_id: str, requirement_id: str):
    return await retail_requirement_service.get_retail_requirement(retailer_id, requirement_id)

@app.put("/retailers/<retailer_id>/requirements/<requirement_id>")
async def update_retail_requirement(retailer_id: str, requirement_id: str, retail_requirement: RetailRequirement):
    return await retail_requirement_service.update_retail_requirement(retailer_id, requirement_id, retail_requirement)

@app.delete("/retailers/<retailer_id>/requirements/<requirement_id>")
async def delete_retail_requirement(retailer_id: str, requirement_id: str):
    return await retail_requirement_service.delete_retail_requirement(retailer_id, requirement_id)