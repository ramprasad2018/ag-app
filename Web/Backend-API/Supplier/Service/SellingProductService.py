from typing import List
from fastapi import FastAPI, HTTPException
from experiment.models import SellingProduct
from experiment.database import get_db


class SellingProductsService:
    def __init__(self, db):
        self.db = db

    async def get_selling_products_list(self, supplier_id: str) -> List[SellingProduct]:
        # This will query the database for all selling products for the given supplier and return a list of SellingProduct objects
        selling_products = await self.db.selling_products.find({"supplier_id": supplier_id}).to_list(length=100)
        return [SellingProduct(**selling_product) for selling_product in selling_products]

    async def get_selling_product(self, supplier_id: str, product_id: str) -> SellingProduct:
        # This will query the database for the selling product with the given ID and return the SellingProduct object
        selling_product = await self.db.selling_products.find_one({"supplier_id": supplier_id, "id": product_id})
        if not selling_product:
            raise HTTPException(status_code=404, detail="Selling product not found")
        return SellingProduct(**selling_product)

    async def create_selling_product(self, supplier_id: str, selling_product: SellingProduct) -> SellingProduct:
        # This will insert a new selling product document into the database and return the SellingProduct object
        await self.db.selling_products.insert_one(selling_product.dict())
        return selling_product

    async def update_selling_product(self, supplier_id: str, product_id: str, selling_product: SellingProduct) -> SellingProduct:
        # This will update the selling product with the given ID with the new data
        await self.db.selling_products.update_one({"supplier_id": supplier_id, "id": product_id}, selling_product.dict())
        return selling_product

    async def delete_selling_product(self, supplier_id: str, product_id: str) -> None:
        # This will delete the selling product with the given ID from the database
        await self.db.selling_products.delete_one({"supplier_id": supplier_id, "id": product_id})

@app.post("/suppliers/{supplier_id}/selling-products")
async def create_selling_product(supplier_id: str, selling_product: SellingProduct):
    return await selling_products_service.create_selling_product(supplier_id, selling_product)

@app.get("/suppliers/{supplier_id}/selling-products")
async def get_selling_products(supplier_id: str):
    return await selling_products_service.get_selling_products_list(supplier_id)

@app.get("/suppliers/{supplier_id}/selling-products/<product_id>")
async def get_selling_product(supplier_id: str, product_id: str):
    return await selling_products_service.get_selling_product(supplier_id, product_id)

@app.put("/suppliers/{supplier_id}/selling-products/<product_id>")
async def update_selling_product(supplier_id: str, product_id: str, selling_product: SellingProduct):
    return await selling_products_service.update_selling_product(supplier_id, product_id, selling_product)

@app.delete("/suppliers/{supplier_id}/selling-products/<product_id>")
async def delete_selling_product(supplier_id: str, product_id: str):
    return await selling_products_service.delete_selling_product(supplier_id, product_id)        
