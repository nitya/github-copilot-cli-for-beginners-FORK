// sample.js - A simple user service with some issues
import mysql from 'mysql';

function getUser(userId) {
  const query = "SELECT * FROM users WHERE id = " + userId;
  return db.query(query);
}

function updateProfile(req, res) {
  const name = req.body.name;
  res.send("<h1>Welcome " + name + "</h1>");
}

function login(username, password) {
  if (password == "admin123") {
    return { token: "abc123", admin: true };
  }
}

export {
  getUser,
  updateProfile,
  login
};
