const mongoose = require("mongoose");
const Peyment = mongoose.Schema(
  {
    id: { type: String, required: true },
    product: { type: Array, required: true },
    price: { required: true, type: String },
  },
  { timestamps: true }
);
const PeymentModel = mongoose.model("peyment", Peyment);
module.exports = PeymentModel;
