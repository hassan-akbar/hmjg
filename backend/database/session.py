import os
from sqlalchemy import create_engine, text
from sqlalchemy.orm import sessionmaker
from dotenv import load_dotenv
from urllib.parse import quote_plus

load_dotenv()

user_name: str = os.getenv("AZURE_SQL_USERNAME")
password: str = os.getenv("AZURE_SQL_PASSWORD")
db_name: str = os.getenv("AZURE_SQL_DATABASE_NAME")
server: str = os.getenv("AZURE_SQL_SERVER_NAME")

# Encode password safely 
password_escaped = quote_plus(password)

DATABASE_URL = (
    f"mssql+pyodbc://{user_name}:{password_escaped}@{server}:1433/{db_name}"
    "?driver=ODBC+Driver+17+for+SQL+Server"
    "&Encrypt=yes"
    "&TrustServerCertificate=no"
    "&Connection Timeout=30"
)

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

if __name__ == "__main__":

    def test_connection():
        try:
            with engine.connect() as connection:
                result = connection.execute(text("SELECT 1"))
                print("✅ Connection successful:", result.scalar())
        except Exception as e:
            print("❌ Connection failed:", e)

    test_connection()
