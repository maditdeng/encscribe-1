"""Entrypoint for the backend application."""

from fastapi import FastAPI

# The application object that represents the backend API "application"
app = FastAPI(
    title="encscribe backend",
)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("run:app", host="0.0.0.0", port=8000, reload=True)
