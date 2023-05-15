const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PrescriptionSchema = new Schema({
  name: { type: String, required: true, maxLength: 100 },
  usage: [{ type: String, required: true, maxlength: 30 }],
  sideEffects: [{ type: String, maxLength: 30 }],
});

module.exports = mongoose.model("Prescription", PrescriptionSchema);
