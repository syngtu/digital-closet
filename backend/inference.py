import sys

from PIL import Image
import torch
from torchvision import transforms
import numpy as np
import os

sys.path.append(os.path.join(os.path.dirname(__file__), "U2NET"))
from model.u2net import U2NETP

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
model_path = os.path.join(BASE_DIR, "U2NET", "saved_models", "u2net", "u2netp.pth")

model = U2NETP(3, 1)
model.load_state_dict(torch.load(model_path, map_location=torch.device("cpu")))
model.eval()

def remove_bg(input_path, output_path):
    image = Image.open(input_path).convert("RGB")
    transform = transforms.Compose([
        transforms.Resize((320, 320)),
        transforms.ToTensor(),
    ])
    input_tensor = transform(image).unsqueeze(0)
    with torch.no_grad():
        d1, *_ = model(input_tensor)
        mask = d1[0][0].numpy()
        mask = (mask - mask.min()) / (mask.max() - mask.min())
        mask = Image.fromarray((mask * 255).astype(np.uint8)).resize(image.size)

    # Convert mask to numpy array and apply threshold
    threshold = 0.5 # senstivity
    mask_np = np.array(mask).astype(np.uint8)
    alpha = np.where(mask_np > int(threshold * 255), mask_np, 0).astype(np.uint8)
    alpha_mask = Image.fromarray(alpha)

    empty_bg = Image.new("RGBA", image.size)
    image = image.convert("RGBA")
    image.putalpha(alpha_mask)
    image.save(output_path)