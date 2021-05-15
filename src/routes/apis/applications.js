const express = require("express");
const router = express.Router();
const ApplicationModel = require("../../models/Application");
const registerApplication = require("./registerApplication");
const getAllApplications = require("./getApplications");
const addComment = require("../apis/addComment");
const cors = require("cors");

// router.post("/register", appValidation(), (req, res) => {
router.use("/register", registerApplication);
router.use("/get", getAllApplications);
const test = (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");

  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();

};
router.use("/add-comment", test, addComment);
module.exports = router;
