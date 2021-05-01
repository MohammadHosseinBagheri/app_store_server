const express = require("express");
const router = express.Router();
const applicationsApi = require("./applications");
const signinApi=require('./auth/signin')
const signupApi=require('./auth/signup')
const peyment=require("./peyment")
const cors = require("cors");
router.use("/applications", cors(), applicationsApi);
router.use("/signin", cors(), signinApi);
router.use("/signup", cors(), signupApi);
router.use("/peyment", cors(), peyment);
module.exports = router;
