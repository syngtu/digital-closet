from fastapi import FastAPI, UploadFile, File
from fastapi.responses import FileResponse
from starlette.middleware.cors import CORSMiddleware
import shutil
import os
from inference import remove_bg  # We’ll create this file next

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust for production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/remove-bg/")
async def remove_bg_api(file: UploadFile = File(...)):
    input_path = "photos/input.jpg"
    output_path = "photos/output.png"

    with open(input_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    remove_bg(input_path, output_path)
    return FileResponse(output_path, media_type="image/png")
