from typing import List
from fastapi import FastAPI, HTTPException
from experiment.models import Retailer
from experiment.database import get_db


class RetailService:
    def __init__(self, db):
        self.db = db

    async def get_retailers_list(self) -> List[Retailer]:
        # This will query the database for all retailers and return a list of Retailer objects
        retailers = await self.db.retailers.find().to_list(length=100)
        return [Retailer(**retailer) for retailer in retailers]

    async def get_retailer(self, retailer_id: str) -> Retailer:
        # This will query the database for the retailer with the given ID and return the Retailer object
        retailer = await self.db.retailers.find_one({"id": retailer_id})
        if not retailer:
            raise HTTPException(status_code=404, detail="Retailer not found")
        return Retailer(**retailer)

    async def create_retailer(self, retailer: Retailer) -> Retailer:
        # This will insert a new retailer document into the database and return the Retailer object
        await self.db.retailers.insert_one(retailer.dict())
        return retailer

    async def update_retailer(self, retailer_id: str, retailer: Retailer) -> Retailer:
        # This will update the retailer with the given ID with the new data
        await self.db.retailers.update_one({"id": retailer_id}, retailer.dict())
        return retailer

    async def delete_retailer(self, retailer_id: str) -> None:
        # This will delete the retailer with the given ID from the database
        await self.db.retailers.delete_one({"id": retailer_id})


app = FastAPI()

# This will inject the database object into the RetailService class
retail_service = RetailService(get_db())

# This will create the routes for the RetailService class
@app.post("/retailers")
async def create_retailer(retailer: Retailer):
    return await retail_service.create_retailer(retailer)

@app.get("/retailers")
async def get_retailers():
    return await retail_service.get_retailers_list()

@app.get("/retailers/<retailer_id>")
async def get_retailer(retailer_id: str):
    return await retail_service.get_retailer(retailer_id)

@app.put("/retailers/<retailer_id>")
async def update_retailer(retailer_id: str, retailer: Retailer):
    return await retail_service.update_retailer(retailer_id, retailer)

@app.delete("/retailers/<retailer_id>")
async def delete_retailer(retailer_id: str):
    return await retail_service.delete_retailer(retailer_id)