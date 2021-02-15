const express = require("express");
const router = express.Router();
const apis = require("./apis/apis");
router.use("/api", apis);
router.get("/",(req,res)=>{
    res.json("home")
})
module.exports = router;
