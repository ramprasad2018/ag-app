# AuthService.py

from typing import List
from fastapi import Depends, HTTPException
from experiment.models import User, UserIn
from experiment.database import get_db


class AuthService:
    def __init__(self, db):
        self.db = db

    async def register(self, user_in: UserIn) -> User:
        # This will check if the username already exists in the database
        user = await self.db.users.find_one({"username": user_in.username})
        if user:
            raise HTTPException(status_code=400, detail="Username already exists")

        # This will insert a new user document into the database
        await self.db.users.insert_one(user_in.dict())

        return user

    async def login(self, username: str, password: str) -> User:
        # This will check if the username and password match a user in the database
        user = await self.db.users.find_one({"username": username, "password": password})
        if not user:
            raise HTTPException(status_code=401, detail="Incorrect username or password")

        return user

    async def logout(self, user: User) -> None:
        # This will delete the user's session from the database
        await self.db.sessions.delete_one({"user_id": user.id})

    async def reset_password(self, username: str, new_password: str) -> None:
        # This will update the user's password in the database
        await self.db.users.update_one({"username": username}, {"$set": {"password": new_password}})


auth_service = AuthService(get_db())

"""

This AuthService.py file implements the following methods:

register(): This method registers a new user in the database.
login(): This method logs a user in to the system.
logout(): This method logs a user out of the system.
reset_password(): This method resets a user's password.

"""
