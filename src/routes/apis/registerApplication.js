const express = require("express");
const { validationResult } = require("express-validator");
const appValidation = require("../../middlewares/fieldValidation/application");
const router = express.Router();
const ApplicationModel = require("../../models/Application");
// router.post("/register", appValidation(), (req, res) => {
router.post("/", (req, res) => {
  const {
    name,
    categori,
    tag,
    size,
    imgUrl,
    rate,
    companyName,
    version,
    installNumber,
    comments,
    description,
    price
  } = req.body;
  //errors
  //   const errors = validationResult(req);
  //   const errs = [];
  //   if (errors.length !== 0) {
  //     errors.array().map((item) => errs.push(item.msg));
  //     res.status(400).json("we have error");
  //   }
  const newApplication = new ApplicationModel({
    name,
    categori,
    tag,
    size,
    imgUrl,
    rate,
    companyName,
    version,
    installNumber,
    comments,
    description,
    price
  });
  newApplication.save(opt=>console.log(opt));
  res.status(200).json("ok");
});
module.exports = router;
