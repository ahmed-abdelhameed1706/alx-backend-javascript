const AppController = require("../controllers/AppController");
const StudentsController = require("../controllers/StudentsController");
const express = require("express");

const linkRoutes = express.Router();

linkRoutes.get("/", AppController.getHomepage);

linkRoutes.get("/students", StudentsController.getAllStudents);

linkRoutes.get("/students/:major", StudentsController.getAllStudentsByMajor);

module.exports = linkRoutes;
