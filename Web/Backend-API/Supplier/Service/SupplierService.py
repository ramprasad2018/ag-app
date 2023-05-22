from typing import List
from fastapi import FastAPI, HTTPException
from experiment.models import Supplier
from experiment.database import get_db


class SupplierService:
    def __init__(self, db):
        self.db = db

    async def get_suppliers_list(self) -> List[Supplier]:
        # This will query the database for all suppliers and return a list of Supplier objects
        suppliers = await self.db.suppliers.find().to_list(length=100)
        return [Supplier(**supplier) for supplier in suppliers]

    async def get_supplier(self, supplier_id: str) -> Supplier:
        # This will query the database for the supplier with the given ID and return the Supplier object
        supplier = await self.db.suppliers.find_one({"id": supplier_id})
        if not supplier:
            raise HTTPException(status_code=404, detail="Supplier not found")
        return Supplier(**supplier)

    async def create_supplier(self, supplier: Supplier) -> Supplier:
        # This will insert a new supplier document into the database and return the Supplier object
        await self.db.suppliers.insert_one(supplier.dict())
        return supplier

    async def update_supplier(self, supplier_id: str, supplier: Supplier) -> Supplier:
        # This will update the supplier with the given ID with the new data
        await self.db.suppliers.update_one({"id": supplier_id}, supplier.dict())
        return supplier

    async def delete_supplier(self, supplier_id: str) -> None:
        # This will delete the supplier with the given ID from the database
        await self.db.suppliers.delete_one({"id": supplier_id})


app = FastAPI()

# This will inject the database object into the SupplierService class
supplier_service = SupplierService(get_db())

# This will create the routes for the SupplierService class
@app.get("/suppliers")
async def get_suppliers():
    return await supplier_service.get_suppliers_list()

@app.get("/suppliers/{supplier_id}")
async def get_supplier(supplier_id: str):
    return await supplier_service.get_supplier(supplier_id)

@app.post("/suppliers")
async def create_supplier(supplier: Supplier):
    return await supplier_service.create_supplier(supplier)

@app.put("/suppliers/{supplier_id}")
async def update_supplier(supplier_id: str, supplier: Supplier):
    return await supplier_service.update_supplier(supplier_id, supplier)

@app.delete("/suppliers/{supplier_id}")
async def delete_supplier(supplier_id: str):
    return await supplier_service.delete_supplier(supplier_id)
