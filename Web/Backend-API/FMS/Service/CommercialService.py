from typing import List
from experiment.models import Commercial
from experiment.database import get_db


class CommercialService:
    def __init__(self, db):
        self.db = db

    async def get_commercials_list(self) -> List[Commercial]:
        # This will query the database for all commercials and return a list of Commercial objects
        commercials = await self.db.commercials.find().to_list(length=100)
        return [Commercial(**commercial) for commercial in commercials]

    async def create_commercial(self, commercial: Commercial) -> Commercial:
        # This will insert a new commercial document into the database and return the Commercial object
        await self.db.commercials.insert_one(commercial.dict())
        return commercial

    async def publish_harvest_forecast(self, harvest_forecast: dict) -> None:
        # This will publish the harvest forecast to the database
        await self.db.harvest_forecasts.insert_one(harvest_forecast)

    async def publish_crop_availability(self, crop_availability: dict) -> None:
        # This will publish the crop availability to the database
        await self.db.crop_availability.insert_one(crop_availability)

    async def publish_requirements(self, requirements: dict) -> None:
        # This will publish the requirements to the database
        await self.db.requirements.insert_one(requirements)

    async def get_requirements(self, crop_name: str) -> dict:
        # This will get the requirements for the specified crop
        requirements = await self.db.requirements.find_one({"crop_name": crop_name})
        return requirements

    async def send_message(self, message: str) -> None:
        # This will send the message to all users
        await self.db.messages.insert_one({"message": message})

"""
This service provides the following methods:

get_commercials_list() - Get a list of all commercials
create_commercial() - Create a new commercial
publish_harvest_forecast() - Publish a harvest forecast
publish_crop_availability() - Publish crop availability
publish_requirements() - Publish requirements
get_requirements() - Get requirements for a specified crop
send_message() - Send a message to all users
"""
