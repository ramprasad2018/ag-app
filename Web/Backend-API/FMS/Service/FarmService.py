# FarmService.py

from typing import List
from fastapi import Depends, HTTPException
from experiment.models import Farm, FarmIn, FarmProgress
from experiment.database import get_db


class FarmService:
    def __init__(self, db):
        self.db = db

    async def create_farm(self, farm_in: FarmIn) -> Farm:
        # This will check if the farm name already exists in the database
        farm = await self.db.farms.find_one({"name": farm_in.name})
        if farm:
            raise HTTPException(status_code=400, detail="Farm name already exists")

        # This will insert a new farm document into the database
        await self.db.farms.insert_one(farm_in.dict())

        return farm

    async def get_all_farms(self) -> List[Farm]:
        # This will query the database for all farms and return a list of Farm objects
        farms = await self.db.farms.find().to_list(length=100)
        return [Farm(**farm) for farm in farms]

    async def update_farm(self, farm_id: str, farm_in: FarmIn) -> Farm:
        # This will check if the farm exists in the database
        farm = await self.db.farms.find_one({"id": farm_id})
        if not farm:
            raise HTTPException(status_code=404, detail="Farm not found")

        # This will update the farm document in the database
        await self.db.farms.update_one({"id": farm_id}, {"$set": farm_in.dict()})

        return farm

    async def delete_farm(self, farm_id: str) -> None:
        # This will delete the farm from the database
        await self.db.farms.delete_one({"id": farm_id})

    async def get_farm_progress(self, farm_id: str) -> FarmProgress:
        # This will query the database for the farm progress and return a FarmProgress object
        farm_progress = await self.db.farm_progress.find_one({"farm_id": farm_id})
        if not farm_progress:
            raise HTTPException(status_code=404, detail="Farm progress not found")

        return farm_progress


farm_service = FarmService(get_db())

"""
This FarmService.py file implements the following methods:

create_farm(): This method creates a new farm in the database.
get_all_farms(): This method gets all farms from the database.
update_farm(): This method updates a farm in the database.
delete_farm(): This method deletes a farm from the database.
get_farm_progress(): This method gets the farm progress for a farm.
"""