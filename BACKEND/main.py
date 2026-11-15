import json
import sqlite3
from contextlib import closing
from pathlib import Path

from fastapi import FastAPI
from pydantic import BaseModel, EmailStr, Field

BASE = Path(__file__).parent
DB_PATH = BASE / "messages.db"

app = FastAPI(title="PCEA Syokimau API")


def init_db() -> None:
    with closing(sqlite3.connect(DB_PATH)) as db:
        db.execute(
            """CREATE TABLE IF NOT EXISTS messages (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                email TEXT NOT NULL,
                message TEXT NOT NULL,
                created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
            )"""
        )
        db.commit()


init_db()


class ContactIn(BaseModel):
    name: str = Field(min_length=2, max_length=100)
    email: EmailStr
    message: str = Field(min_length=5, max_length=2000)


@app.get("/api/health")
def health():
    return {"status": "ok"}


@app.get("/api/content")
def get_content():
    return json.loads((BASE / "content.json").read_text(encoding="utf-8"))


@app.post("/api/contact", status_code=201)
def post_contact(body: ContactIn):
    with closing(sqlite3.connect(DB_PATH)) as db:
        db.execute(
            "INSERT INTO messages (name, email, message) VALUES (?, ?, ?)",
            (body.name.strip(), body.email, body.message.strip()),
        )
        db.commit()
    return {"ok": True}