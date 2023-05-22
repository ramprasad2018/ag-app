from typing import List
from fastapi import FastAPI, HTTPException
from experiment.models import BuyerRequirement
from experiment.database import get_db


class BuyerRequirementService:
    def __init__(self, db):
        self.db = db

    async def get_buyer_requirements_list(self, buyer_id: str) -> List[BuyerRequirement]:
        # This will query the database for all buyer requirements for the given buyer and return a list of BuyerRequirement objects
        buyer_requirements = await self.db.buyer_requirements.find({"buyer_id": buyer_id}).to_list(length=100)
        return [BuyerRequirement(**buyer_requirement) for buyer_requirement in buyer_requirements]

    async def get_buyer_requirement(self, buyer_id: str, requirement_id: str) -> BuyerRequirement:
        # This will query the database for the buyer requirement with the given ID and return the BuyerRequirement object
        buyer_requirement = await self.db.buyer_requirements.find_one({"buyer_id": buyer_id, "id": requirement_id})
        if not buyer_requirement:
            raise HTTPException(status_code=404, detail="Buyer requirement not found")
        return BuyerRequirement(**buyer_requirement)

    async def create_buyer_requirement(self, buyer_id: str, buyer_requirement: BuyerRequirement) -> BuyerRequirement:
        # This will insert a new buyer requirement document into the database and return the BuyerRequirement object
        await self.db.buyer_requirements.insert_one(buyer_requirement.dict())
        return buyer_requirement

    async def update_buyer_requirement(self, buyer_id: str, requirement_id: str, buyer_requirement: BuyerRequirement) -> BuyerRequirement:
        # This will update the buyer requirement with the given ID with the new data
        await self.db.buyer_requirements.update_one({"buyer_id": buyer_id, "id": requirement_id}, buyer_requirement.dict())
        return buyer_requirement

    async def delete_buyer_requirement(self, buyer_id: str, requirement_id: str) -> None:
        # This will delete the buyer requirement with the given ID from the database
        await self.db.buyer_requirements.delete_one({"buyer_id": buyer_id, "id": requirement_id})


app = FastAPI()

# This will inject the database object into the BuyerRequirementService class
buyer_requirement_service = BuyerRequirementService(get_db())

# This will create the routes for the BuyerRequirementService class
@app.post("/buyers/<buyer_id>/requirements")
async def create_buyer_requirement(buyer_id: str, buyer_requirement: BuyerRequirement):
    return await buyer_requirement_service.create_buyer_requirement(buyer_id, buyer_requirement)

@app.get("/buyers/<buyer_id>/requirements")
async def get_buyer_requirements(buyer_id: str):
    return await buyer_requirement_service.get_buyer_requirements_list(buyer_id)

@app.get("/buyers/<buyer_id>/requirements/<requirement_id>")
async def get_buyer_requirement(buyer_id: str, requirement_id: str):
    return await buyer_requirement_service.get_buyer_requirement(buyer_id, requirement_id)

@app.put("/buyers/<buyer_id>/requirements/<requirement_id>")
async def update_buyer_requirement(buyer_id: str, requirement_id: str, buyer_requirement: BuyerRequirement):
    return await buyer_requirement_service.update_buyer_requirement(buyer_id, requirement_id, buyer_requirement)

@app.delete("/buyers/<buyer_id>/requirements/<requirement_id>")
async def delete_buyer_requirement(buyer_id: str, requirement_id: str):
    return await buyer_requirement_service.delete_buyer_requirement(buyer_id, requirement_id)