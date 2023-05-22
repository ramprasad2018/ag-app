from typing import List
from fastapi import FastAPI, HTTPException
from experiment.models import Logistic
from experiment.database import get_db


class LogisticService:
    def __init__(self, db):
        self.db = db

    async def get_logistics_list(self) -> List[Logistic]:
        # This will query the database for all logistics and return a list of Logistic objects
        logistics = await self.db.logistics.find().to_list(length=100)
        return [Logistic(**logistic) for logistic in logistics]

    async def get_logistic(self, logistic_id: str) -> Logistic:
        # This will query the database for the logistic with the given ID and return the Logistic object
        logistic = await self.db.logistics.find_one({"id": logistic_id})
        if not logistic:
            raise HTTPException(status_code=404, detail="Logistic not found")
        return Logistic(**logistic)

    async def create_logistic(self, logistic: Logistic) -> Logistic:
        # This will insert a new logistic document into the database and return the Logistic object
        await self.db.logistics.insert_one(logistic.dict())
        return logistic

    async def update_logistic(self, logistic_id: str, logistic: Logistic) -> Logistic:
        # This will update the logistic with the given ID with the new data
        await self.db.logistics.update_one({"id": logistic_id}, logistic.dict())
        return logistic

    async def delete_logistic(self, logistic_id: str) -> None:
        # This will delete the logistic with the given ID from the database
        await self.db.logistics.delete_one({"id": logistic_id})


app = FastAPI()

# This will inject the database object into the LogisticService class
logistic_service = LogisticService(get_db())

# This will create the routes for the LogisticService class
@app.post("/logistics")
async def create_logistic(logistic: Logistic):
    return await logistic_service.create_logistic(logistic)

@app.get("/logistics")
async def get_logistics():
    return await logistic_service.get_logistics_list()

@app.get("/logistics/123")
async def get_logistic(logistic_id: str):
    return await logistic_service.get_logistic(logistic_id)

@app.put("/logistics/123")
async def update_logistic(logistic_id: str, logistic: Logistic):
    return await logistic_service.update_logistic(logistic_id, logistic)

@app.delete("/logistics/123")
async def delete_logistic(logistic_id: str):
    return await logistic_service.delete_logistic(logistic_id)