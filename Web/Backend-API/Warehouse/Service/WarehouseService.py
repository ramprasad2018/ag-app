from typing import List
from fastapi import FastAPI, HTTPException
from experiment.models import Warehouse
from experiment.database import get_db


class WarehouseService:
    def __init__(self, db):
        self.db = db

    async def get_warehouses_list(self) -> List[Warehouse]:
        # This will query the database for all warehouses and return a list of Warehouse objects
        warehouses = await self.db.warehouses.find().to_list(length=100)
        return [Warehouse(**warehouse) for warehouse in warehouses]

    async def get_warehouse(self, warehouse_id: str) -> Warehouse:
        # This will query the database for the warehouse with the given ID and return the Warehouse object
        warehouse = await self.db.warehouses.find_one({"id": warehouse_id})
        if not warehouse:
            raise HTTPException(status_code=404, detail="Warehouse not found")
        return Warehouse(**warehouse)

    async def create_warehouse(self, warehouse: Warehouse) -> Warehouse:
        # This will insert a new warehouse document into the database and return the Warehouse object
        await self.db.warehouses.insert_one(warehouse.dict())
        return warehouse

    async def update_warehouse(self, warehouse_id: str, warehouse: Warehouse) -> Warehouse:
        # This will update the warehouse with the given ID with the new data
        await self.db.warehouses.update_one({"id": warehouse_id}, warehouse.dict())
        return warehouse

    async def delete_warehouse(self, warehouse_id: str) -> None:
        # This will delete the warehouse with the given ID from the database
        await self.db.warehouses.delete_one({"id": warehouse_id})


app = FastAPI()

# This will inject the database object into the WarehouseService class
warehouse_service = WarehouseService(get_db())

# This will create the routes for the WarehouseService class
@app.post("/warehouses")
async def create_warehouse(warehouse: Warehouse):
    return await warehouse_service.create_warehouse(warehouse)

@app.get("/warehouses")
async def get_warehouses():
    return await warehouse_service.get_warehouses_list()

@app.get("/warehouses/<warehouse_id>")
async def get_warehouse(warehouse_id: str):
    return await warehouse_service.get_warehouse(warehouse_id)

@app.put("/warehouses/<warehouse_id>")
async def update_warehouse(warehouse_id: str, warehouse: Warehouse):
    return await warehouse_service.update_warehouse(warehouse_id, warehouse)

@app.delete("/warehouses/<warehouse_id>")
async def delete_warehouse(warehouse_id: str):
    return await warehouse_service.delete_warehouse(warehouse_id)