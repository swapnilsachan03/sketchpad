from sqlalchemy import TEXT, Column, Integer

from src.db import Base


class User(Base):
    __tablename__ = "user"

    id = Column(Integer, primary_key=True)
    email = Column(TEXT, unique=True, nullable=False)
    name = Column(TEXT, nullable=False)
    hashed_password = Column(TEXT)
