const express = require("express");
const router = express.Router();
const apis = require("./apis/apis");
const cors = (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
  
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  
  };
router.use("/api",cors, apis);
router.get("/",(req,res)=>{
    res.json("home")
})
module.exports = router;
