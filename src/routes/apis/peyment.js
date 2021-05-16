const express = require("express");
const UserModel = require("../../models/User");
const PeymentModel = require("../../models/Peyment");
const router = express.Router();
router.post("/", (req, res) => {
  console.log(req.body);
  const { id, product, price } = req.body;
  UserModel.findOne({ _id: id }, (error, doc) => {
    if (error) {
      res.status(500).json(error);
      return;
    } else if (!doc) {
      res.status(404).json("not found");
    } else {
      const userData = { ...doc };
      const newFactor = new PeymentModel({
        id,
        price,
        product,
      });
      newFactor.save((doc) => console.log(doc));
      res.status(200).json({ newFactor, email: doc.email, name: doc.name });
    }
  });
});
router.get("/", (req, res) => {
  const { id } = req.query;
  PeymentModel.find({ id }, (err, doc) => {
    if (err) {
      res.status(500).json(err);
    } else if (doc.length === 0) {
      res.status(200).json([]);
    } else {
      res.status(200).json(doc);
    }
  });
});
module.exports = router;
