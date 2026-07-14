"""Entrypoint for the backend application."""

from fastapi import FastAPI

# The application object that represents the backend API "application"
app = FastAPI(
    title="encscribe backend",
)


@app.get("/")
def root():
    return {"status": "ok"}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("run:app", host="127.0.0.1", port=8000, reload=True)
