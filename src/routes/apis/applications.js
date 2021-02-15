const express = require("express");
const router = express.Router();
const ApplicationModel = require("../../models/Application");
const registerApplication = require("./registerApplication");
const getAllApplications=require('./getApplications')
// router.post("/register", appValidation(), (req, res) => {
router.use("/register", registerApplication);
router.use("/get", getAllApplications);
module.exports = router;
