from typing import List
from fastapi import FastAPI, HTTPException
from experiment.models import WarehouseAvailability
from experiment.database import get_db


class WarehouseAvailabilityService:
    def __init__(self, db):
        self.db = db

    async def get_warehouse_availabilities_list(self, warehouse_id: str) -> List[WarehouseAvailability]:
        # This will query the database for all warehouse availabilities for the given warehouse and return a list of WarehouseAvailability objects
        warehouse_availabilities = await self.db.warehouse_availabilities.find({"warehouse_id": warehouse_id}).to_list(length=100)
        return [WarehouseAvailability(**warehouse_availability) for warehouse_availability in warehouse_availabilities]

    async def get_warehouse_availability(self, warehouse_id: str, availability_id: str) -> WarehouseAvailability:
        # This will query the database for the warehouse availability with the given ID and return the WarehouseAvailability object
        warehouse_availability = await self.db.warehouse_availabilities.find_one({"warehouse_id": warehouse_id, "id": availability_id})
        if not warehouse_availability:
            raise HTTPException(status_code=404, detail="Warehouse availability not found")
        return WarehouseAvailability(**warehouse_availability)

    async def create_warehouse_availability(self, warehouse_id: str, warehouse_availability: WarehouseAvailability) -> WarehouseAvailability:
        # This will insert a new warehouse availability document into the database and return the WarehouseAvailability object
        await self.db.warehouse_availabilities.insert_one(warehouse_availability.dict())
        return warehouse_availability

    async def update_warehouse_availability(self, warehouse_id: str, availability_id: str, warehouse_availability: WarehouseAvailability) -> WarehouseAvailability:
        # This will update the warehouse availability with the given ID with the new data
        await self.db.warehouse_availabilities.update_one({"warehouse_id": warehouse_id, "id": availability_id}, warehouse_availability.dict())
        return warehouse_availability

    async def delete_warehouse_availability(self, warehouse_id: str, availability_id: str) -> None:
        # This will delete the warehouse availability with the given ID from the database
        await self.db.warehouse_availabilities.delete_one({"warehouse_id": warehouse_id, "id": availability_id})


app = FastAPI()

# This will inject the database object into the WarehouseAvailabilityService class
warehouse_availability_service = WarehouseAvailabilityService(get_db())

# This will create the routes for the WarehouseAvailabilityService class
@app.post("/warehouses/<warehouse_id>/availabilities")
async def create_warehouse_availability(warehouse_id: str, warehouse_availability: WarehouseAvailability):
    return await warehouse_availability_service.create_warehouse_availability(warehouse_id, warehouse_availability)

@app.get("/warehouses/<warehouse_id>/availabilities")
async def get_warehouse_availabilities(warehouse_id: str):
    return await warehouse_availability_service.get_warehouse_availabilities_list(warehouse_id)

@app.get("/warehouses/<warehouse_id>/availabilities/<availability_id>")
async def get_warehouse_availability(warehouse_id: str, availability_id: str):
    return await warehouse_availability_service.get_warehouse_availability(warehouse_id, availability_id)

@app.put("/warehouses/<warehouse_id>/availabilities/<availability_id>")
async def update_warehouse_availability(warehouse_id: str, availability_id: str, warehouse_availability: WarehouseAvailability):
    return await warehouse_availability_service.update_warehouse_availability(warehouse_id, availability_id, warehouse_availability)

@app.delete("/warehouses/<warehouse_id>/availabilities/<availability_id>")
async def delete_warehouse_availability(warehouse_id: str, availability_id: str):
    return await warehouse_availability_service.delete_warehouse_availability(warehouse_id, availability_id)