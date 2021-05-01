const express = require("express");
const UserModel = require("../../../models/User");
const router = express.Router();
const User = UserModel;
router.post("/", (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email }, (err, doc) => {
    if (err) {
      res.status(500).json(err);
      return;
    } else if (doc) {
      const userPass = doc.password;
      console.log(userPass,password);
      //   console.log(doc);
      if (password !== userPass) {
        res.status(400).json("validation failed");
        return;
      } else {
        res.status(200).json(doc);
        return;
      }
    } else {
      res.status(404).json("user not found");
    }
  });
});
module.exports = router;
