const mongoose = require("mongoose");
const ApplicationSchema = require("../../models/Application");
const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const { _id, text } = req.body;
  ApplicationSchema.find({ _id }, (error, doc) => {
    if (error) throw new Error(error);
    const application = doc[0];
    const { comments } = application;
    application.comments = [
      ...comments,
      { _id: Math.random() * 100000000000, text },
    ];
    application.save((err) => {
      if (err) throw new Error(err);
      else res.status(200).json("ok");
    });
    res.status(200);
  });
});
module.exports = router;
