 services.py

from typing import List
from fastapi import Depends, HTTPException
from experiment.models import CropPlan, CropPlanIn
from experiment.database import get_db


class CropService:
    def __init__(self, db):
        self.db = db

    async def get_all_crop_plans(self) -> List[CropPlan]:
        # This will query the database for all crop plans and return a list of CropPlan objects
        crop_plans = await self.db.crop_plans.find().to_list(length=100)
        return [CropPlan(**crop_plan) for crop_plan in crop_plans]

    async def get_crop_plan(self, crop_plan_id: str) -> CropPlan:
        # This will query the database for the crop plan and return a CropPlan object
        crop_plan = await self.db.crop_plans.find_one({"id": crop_plan_id})
        if not crop_plan:
            raise HTTPException(status_code=404, detail="Crop plan not found")

        return crop_plan

    async def add_crop_plan(self, crop_plan_in: CropPlanIn) -> CropPlan:
        # This will check if the crop name already exists in the database
        crop_plan = await self.db.crop_plans.find_one({"name": crop_plan_in.name})
        if crop_plan:
            raise HTTPException(status_code=400, detail="Crop name already exists")

        # This will insert a new crop plan document into the database
        await self.db.crop_plans.insert_one(crop_plan_in.dict())

        return crop_plan

    async def update_crop_plan(self, crop_plan_id: str, crop_plan_in: CropPlanIn) -> CropPlan:
        # This will check if the crop plan exists in the database
        crop_plan = await self.db.crop_plans.find_one({"id": crop_plan_id})
        if not crop_plan:
            raise HTTPException(status_code=404, detail="Crop plan not found")

        # This will update the crop plan document in the database
        await self.db.crop_plans.update_one({"id": crop_plan_id}, {"$set": crop_plan_in.dict()})

        return crop_plan

    async def delete_crop_plan(self, crop_plan_id: str) -> None:
        # This will delete the crop plan from the database
        await self.db.crop_plans.delete_one({"id": crop_plan_id})

    async def get_crop_suggestion(self, location: str, climate: str, soil: str) -> List[Crop]:
        # This will get a list of crops that are suitable for the specified location, climate, and soil
        crops = await self.db.crops.find({"location": location, "climate": climate, "soil": soil}).to_list(length=100)
        return crops

    async def get_inter_crop_plan(self, crop_1: str, crop_2: str) -> InterCropPlan:
        # This will get the inter-crop plan for the specified crops
        inter_crop_plan = await self.db.inter_crop_plans.find_one({"crop_1": crop_1, "crop_2": crop_2})
        return inter_crop_plan

    async def get_crop_plan_activities_status(self, crop_plan_id: str) -> CropPlanActivitiesStatus:
        # This will get the status of the activities for the specified crop plan
        crop_plan_activities_status = await self.db.crop_plan_activities_status.find_one({"crop_plan_id": crop_plan_id})
        return crop_plan_activities_status

    async def get_crop_harvest_forecast(self, crop_name: str) -> CropHarvestForecast:
        # This will get the harvest forecast for the specified crop
        crop_harvest_forecast = await self.db.crop_harvest_forecasts.find_one({"crop_name": crop_name})
        return crop_harvest_forecast

crop_service = CropService(get_db())

"""
This CropService.py file implements the following methods:

get_all_crop_plans(): This method gets all crop plans from the database.
get_crop_plan(): This method gets a crop plan from the database by its ID.
add_crop_plan(): This method adds a new crop plan to the database.
update_crop_plan(): This method updates a crop plan in the database.
delete_crop_plan(): This method deletes a crop plan from the database.
get_crop_suggestion() - Get a list of crops that are suitable for the specified location, climate, and soil
get_inter_crop_plan() - Get the inter-crop plan for the specified crops
get_crop_plan_activities_status() - Get the status of the activities for the specified crop plan
get_crop_harvest_forecast() - Get the harvest forecast for the specified crop
"""