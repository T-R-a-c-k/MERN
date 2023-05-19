const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { DateTime } = require("luxon");

const Staff = new Schema(
  {
    firstName: { type: String, required: true, maxLength: 100, minlength: 1 },
    lastName: { type: String, required: true, maxLength: 100, minlength: 1 },
    position: { type: String, required: true },
    salary: { type: Number, required: true },
    deptID: { type: Schema.Types.ObjectId, ref: "Department", required: true },
    phoneNumber: { type: String, required: true, minLength: 12, maxLength: 12 },
    email: { type: String, required: true },
    hireDate: { type: Date, required: true },
    password: { type: String, required: true, minLength: 16 },
    role: { type: String, required: true },
  },
  {
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
  }
);

Staff.virtual("fullName").get(function () {
  return `${this.firstName} ${this.lastName}`;
});

Staff.virtual("hireDateFormatted").get(function () {
  return DateTime.fromJSDate(this.hireDate).toLocaleString(DateTime.DATE_MED);
});

module.exports = mongoose.model("Staff", Staff);
