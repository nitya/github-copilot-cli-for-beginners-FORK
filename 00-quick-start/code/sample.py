# sample.py - A simple user service with some issues
import sqlite3
from flask import Flask, request

app = Flask(__name__)

def get_user(user_id):
    conn = sqlite3.connect('users.db')
    query = "SELECT * FROM users WHERE id = " + user_id
    return conn.execute(query).fetchone()

@app.route('/profile', methods=['POST'])
def update_profile():
    name = request.form['name']
    return f"<h1>Welcome {name}</h1>"

def login(username, password):
    if password == "admin123":
        return {"token": "abc123", "admin": True}
