# services.py

from typing import List
from fastapi import Depends, HTTPException
from experiment.models import Plant, DiseaseCure, SoilImprovementPlan
from experiment.database import get_db


class PlantService:
    def __init__(self, db):
        self.db = db

    async def get_disease_cure(self, disease_name: str) -> DiseaseCure:
        # This will query the database for the disease cure and return a DiseaseCure object
        disease_cure = await self.db.disease_cures.find_one({"disease_name": disease_name})
        if not disease_cure:
            raise HTTPException(status_code=404, detail="Disease cure not found")

        return disease_cure

    async def get_soil_improvement_plan(self, plant_id: str) -> SoilImprovementPlan:
        # This will query the database for the soil improvement plan and return a SoilImprovementPlan object
        soil_improvement_plan = await self.db.soil_improvement_plans.find_one({"plant_id": plant_id})
        if not soil_improvement_plan:
            raise HTTPException(status_code=404, detail="Soil improvement plan not found")

        return soil_improvement_plan


plant_service = PlantService(get_db())

"""
This PlantService.py file implements the following methods:

get_disease_cure(): This method gets the disease cure for a disease.
get_soil_improvement_plan(): This method gets the soil improvement plan for a plant.
"""