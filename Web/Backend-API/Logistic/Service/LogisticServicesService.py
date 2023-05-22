from typing import List
from fastapi import FastAPI, HTTPException
from experiment.models import LogisticService
from experiment.database import get_db


class LogisticServicesService:
    def __init__(self, db):
        self.db = db

    async def get_logistic_services_list(self, logistic_id: str) -> List[LogisticService]:
        # This will query the database for all logistic services for the given logistic and return a list of LogisticService objects
        logistic_services = await self.db.logistic_services.find({"logistic_id": logistic_id}).to_list(length=100)
        return [LogisticService(**logistic_service) for logistic_service in logistic_services]

    async def get_logistic_service(self, logistic_id: str, service_id: str) -> LogisticService:
        # This will query the database for the logistic service with the given ID and return the LogisticService object
        logistic_service = await self.db.logistic_services.find_one({"logistic_id": logistic_id, "id": service_id})
        if not logistic_service:
            raise HTTPException(status_code=404, detail="Logistic service not found")
        return LogisticService(**logistic_service)

    async def create_logistic_service(self, logistic_id: str, logistic_service: LogisticService) -> LogisticService:
        # This will insert a new logistic service document into the database and return the LogisticService object
        await self.db.logistic_services.insert_one(logistic_service.dict())
        return logistic_service

    async def update_logistic_service(self, logistic_id: str, service_id: str, logistic_service: LogisticService) -> LogisticService:
        # This will update the logistic service with the given ID with the new data
        await self.db.logistic_services.update_one({"logistic_id": logistic_id, "id": service_id}, logistic_service.dict())
        return logistic_service

    async def delete_logistic_service(self, logistic_id: str, service_id: str) -> None:
        # This will delete the logistic service with the given ID from the database
        await self.db.logistic_services.delete_one({"logistic_id": logistic_id, "id": service_id})


app = FastAPI()

# This will inject the database object into the LogisticServicesService class
logistic_services_service = LogisticServicesService(get_db())

# This will create the routes for the LogisticServicesService class
@app.post("/logistics/<logistic_id>/services")
async def create_logistic_service(logistic_id: str, logistic_service: LogisticService):
    return await logistic_services_service.create_logistic_service(logistic_id, logistic_service)

@app.get("/logistics/<logistic_id>/services")
async def get_logistic_services(logistic_id: str):
    return await logistic_services_service.get_logistic_services_list(logistic_id)

@app.get("/logistics/<logistic_id>/services/<service_id>")
async def get_logistic_service(logistic_id: str, service_id: str):
    return await logistic_services_service.get_logistic_service(logistic_id, service_id)

@app.put("/logistics/<logistic_id>/services/<service_id>")
async def update_logistic_service(logistic_id: str, service_id: str, logistic_service: LogisticService):
    return await logistic_services_service.update_logistic_service(logistic_id, service_id, logistic_service)

@app.delete("/logistics/123/<logistic_id>/<service_id>")
async def delete_logistic_service(logistic_id: str, service_id: str):
    return await logistic_services_service.delete_logistic_service(logistic_id, service_id)