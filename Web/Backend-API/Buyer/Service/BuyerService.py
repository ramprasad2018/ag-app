from typing import List
from fastapi import FastAPI, HTTPException
from experiment.models import Buyer
from experiment.database import get_db


class BuyerService:
    def __init__(self, db):
        self.db = db

    async def get_buyers_list(self) -> List[Buyer]:
        # This will query the database for all buyers and return a list of Buyer objects
        buyers = await self.db.buyers.find().to_list(length=100)
        return [Buyer(**buyer) for buyer in buyers]

    async def get_buyer(self, buyer_id: str) -> Buyer:
        # This will query the database for the buyer with the given ID and return the Buyer object
        buyer = await self.db.buyers.find_one({"id": buyer_id})
        if not buyer:
            raise HTTPException(status_code=404, detail="Buyer not found")
        return Buyer(**buyer)

    async def create_buyer(self, buyer: Buyer) -> Buyer:
        # This will insert a new buyer document into the database and return the Buyer object
        await self.db.buyers.insert_one(buyer.dict())
        return buyer

    async def update_buyer(self, buyer_id: str, buyer: Buyer) -> Buyer:
        # This will update the buyer with the given ID with the new data
        await self.db.buyers.update_one({"id": buyer_id}, buyer.dict())
        return buyer

    async def delete_buyer(self, buyer_id: str) -> None:
        # This will delete the buyer with the given ID from the database
        await self.db.buyers.delete_one({"id": buyer_id})


app = FastAPI()

# This will inject the database object into the BuyerService class
buyer_service = BuyerService(get_db())

# This will create the routes for the BuyerService class
@app.post("/buyers")
async def create_buyer(buyer: Buyer):
    return await buyer_service.create_buyer(buyer)

@app.get("/buyers")
async def get_buyers():
    return await buyer_service.get_buyers_list()

@app.get("/buyers/<buyer_id>")
async def get_buyer(buyer_id: str):
    return await buyer_service.get_buyer(buyer_id)

@app.put("/buyers/<buyer_id>")
async def update_buyer(buyer_id: str, buyer: Buyer):
    return await buyer_service.update_buyer(buyer_id, buyer)

@app.delete("/buyers/<buyer_id>")
async def delete_buyer(buyer_id: str):
    return await buyer_service.delete_buyer(buyer_id)