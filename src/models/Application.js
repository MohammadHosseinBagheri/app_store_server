const mongoose = require("mongoose");
const ApplicationSchema = mongoose.Schema({
  name: { type: String, required: true, unique: true },
  categori: { type: String, required: true },
  tag: { type: String, required: true, enum: ["driver", "game", "etc","food"] },
  size: { type: String, required: true },
  images: { type: Object, default: {} },
  rate: { type: String, default: "4" },
  companyName: { type: String, required: true },
  version: { type: String, default: "1" },
  installNumber: { type: String },
  comments: { type: Array, default: {} },
  description: { type: String, required: true },
});
const ApplicationModel = mongoose.model("application", ApplicationSchema);
module.exports = ApplicationModel;
