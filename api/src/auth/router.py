from fastapi import APIRouter, HTTPException, Depends
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.exc import IntegrityError
from sqlalchemy.orm import Session

from src.auth.schemas import SignupRequest
from src.auth.service import verify_password, create_access_token
from src.db import get_db
from . import models
from . import service

router = APIRouter()


@router.post("/signup")
async def signup(data: SignupRequest, db: Session = Depends(get_db)):
    try:
        existing_user = db.query(models.User).filter(models.User.email == data.email).first()

        if existing_user:
            raise HTTPException(400, "Email already registered")

        user = models.User(
            name=data.name,
            email=data.email,
            hashed_password=service.get_password_hash(data.password),
        )

        db.add(user)
        db.commit()
        db.refresh(user)

        return {
            "message": "success",
            "user": user,
        }

    except IntegrityError as e:
        db.rollback()
        raise HTTPException(400, "User already exists")

    except Exception as e:
        raise HTTPException(400, f"An error occurred: {e}")


@router.post("/login")
async def login(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    try:
        user = db.query(models.User).filter(models.User.email == form_data.username).first()

        if not user:
            raise HTTPException(400, "User does not exist")

        if not verify_password(form_data.password, user.hashed_password):
            raise HTTPException(400, "Incorrect password")

        access_token = create_access_token(data={"email": user.email})

        return {"access_token": access_token, "token_type": "bearer"}

    except Exception as e:
        raise HTTPException(400, f"An error occurred: {e}")
