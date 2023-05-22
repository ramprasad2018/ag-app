from typing import List
from experiment.models import Report, HelpRequest, HowTo
from experiment.database import get_db


class UtilityService:
    def __init__(self, db):
        self.db = db

    async def send_report(self, report: Report) -> None:
        # This will send the report to the appropriate recipient
        await self.db.reports.insert_one(report.dict())

    async def send_help_request(self, help_request: HelpRequest) -> None:
        # This will send the help request to the appropriate recipient
        await self.db.help_requests.insert_one(help_request.dict())

    async def get_how_to(self, how_to_id: str) -> HowTo:
        # This will get the how-to with the specified ID
        how_to = await self.db.how_tos.find_one({"id": how_to_id})
        return how_to
"""
This service provides the following methods:

send_report() - Send a report
send_help_request() - Send a help request
get_how_to() - Get a how-to by ID
"""