const express = require("express");
const router = express.Router();
const applicationsApi = require("./applications");
router.use("/applications", applicationsApi);
module.exports = router;
