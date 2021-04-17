const express = require("express");
const router = express.Router();
const applicationsApi = require("./applications");
const cors = require("cors");
router.use("/applications", cors(), applicationsApi);
module.exports = router;
