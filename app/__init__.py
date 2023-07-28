from flask import Flask
from flask_mysqldb import MySQL

app = Flask(__name__)

# Configure the Flask app (optional, for debugging purposes)
app.config['DEBUG'] = True

# MySQL Configuration
app.config['MYSQL_HOST'] = 'MySQL80'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'Kea2c7ra$'
app.config['MYSQL_DB'] = 'roadSafetyDB;'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'  # Return results as dictionaries

# Initialize MySQL
mysql = MySQL(app)

# Import the routes module to register the routes with the app
from app import routes