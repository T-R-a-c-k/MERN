const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Staff = new Schema({
  firstName: { type: String, required: true, maxLength: 100, minlength: 1 },
  lastName: { type: String, required: true, maxLength: 100, minlength: 1 },
  position: { type: Schema.Types.ObjectId, ref: "Position", required: true },
  salary: { type: Number, required: true },
  deptID: { type: Schema.Types.ObjectId, ref: "Department", required: true },
  phoneNumber: { type: Number, required: true },
  email: { type: String, required: true },
  hireDate: { type: Date, required: true },
});

Staff.virtual("fullName").get(function () {
  return `${this.firstName} ${this.lastName}`;
});

Staff.virtual("hireDateFormatted").get(function () {
  return DateTime.fromJSDate(this.hireDate).toLocaleString(DateTime.DATE_MED);
});

module.exports = mongoose.model("Staff", Staff);
