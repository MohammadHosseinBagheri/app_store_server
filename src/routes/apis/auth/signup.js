const express = require("express");
const UserModel = require("../../../models/User");
const router = express.Router();
const User = UserModel;
router.post("/", (req, res) => {
  const { email, password, name } = req.body;
  User.findOne({ email }, (err, doc) => {
    if (err) {
      res.status(500).json(err);
      return;
    } else if (doc) {
      res.status(400).json("this email is registred");
      return;
    } else {
      const newUser = new UserModel({
        email,
        password,
        name,
      });
      newUser.save();
      res.status(200).json(newUser);
      return;
    }
  });
});
module.exports = router;
