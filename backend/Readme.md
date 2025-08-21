# FastAPI Backend Project Structure

This repository contains a structured **FastAPI backend** setup designed for scalability, clarity, and maintainability.

## Change the readme.md later based on how to run the backend

## 📂 Folder Structure

```bash
project/
│
├── app/                       # Main application package
│   ├── __init__.py
│   ├── main.py                # Entry point (FastAPI instance, middleware, events)
│   │
│   ├── api/                   # API layer (routers)
│   │   ├── __init__.py
│   │   ├── v1/                # Versioned APIs
│   │   │   ├── __init__.py
│   │   │   ├── routes_users.py
│   │   │   ├── routes_items.py
│   │   │   └── routes_auth.py
│   │   └── v2/                # Future version
│   │       └── __init__.py
│   │
│   ├── core/                  # Core application settings
│   │   ├── __init__.py
│   │   ├── config.py          # Pydantic settings (env variables)
│   │   ├── security.py        # Auth helpers (JWT, hashing, etc.)
│   │   └── logging.py
│   │
│   ├── models/                # Database models (SQLAlchemy, Pydantic ORM)
│   │   ├── __init__.py
│   │   ├── user.py
│   │   └── item.py
│   │
│   ├── schemas/               # Pydantic models (request/response validation)
│   │   ├── __init__.py
│   │   ├── user.py
│   │   └── item.py
│   │
│   ├── services/              # Business logic / service layer
│   │   ├── __init__.py
│   │   ├── user_service.py
│   │   └── item_service.py
│   │
│   ├── db/                    # Database configuration and session
│   │   ├── __init__.py
│   │   ├── base.py            # Import all models here
│   │   ├── session.py         # SQLAlchemy SessionLocal
│   │   └── init_db.py
│   │
│   ├── utils/                 # Utility functions
│   │   ├── __init__.py
│   │   └── email.py
│   │
│   └── tests/                 # Unit & integration tests
│       ├── __init__.py
│       ├── test_users.py
│       └── test_items.py
│
├── migrations/                # Alembic migration files
│
├── requirements.txt           # Dependencies
├── pyproject.toml             # Alternative dependency management
├── alembic.ini
├── .env                       # Environment variables
└── README.md
```
