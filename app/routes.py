from flask import render_template
from app import app
# from app.models import UserInput

# Sample data for predefined nodes (replace this with your actual data)
predefined_nodes = [
    {"id": 1, "latitude": 37.7749, "longitude": -122.4194},
    {"id": 2, "latitude": 37.3364, "longitude": -121.8904},
    # Add more predefined nodes here as needed
]

# Define your routes and view functions here

@app.route('/')
def index():
    return render_template('index.html')
