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

router.use("/add-comment", addComment);
module.exports = router;
