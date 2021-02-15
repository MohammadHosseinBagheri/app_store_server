const express = require("express");
const router = express.Router();
const ApplicationModel = require("../../models/Application");
const registerApplication = require("./registerApplication");
// router.post("/register", appValidation(), (req, res) => {
router.get("/", (req, res) => {
  ApplicationModel.find({}, (error, docs) => {
    if (error) {
      res.status(400).json(error);
    }
    res.status(200).json(docs);
  });
});
module.exports = router;
