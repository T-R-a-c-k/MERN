const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DepartmentSchema = new Schema({
  name: { type: String, required: true, maxLength: 100 },
  location: { type: String, required: true, maxLength: 100 },
  budget: { type: Number, required: true },
});

module.exports = mongoose.model("Department", DepartmentSchema);
