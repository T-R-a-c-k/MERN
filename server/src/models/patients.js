const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PatientScheme = new Schema({
  firstName: { type: string, required: true, maxLength: 100, minlength: 1 },
  lastName: { type: string, required: true, maxLength: 100, minlength: 1 },
  birthDate: { type: Date, required: true },
  medicalNumber: { type: Number, required: true },
  email: { type: string, required: true, maxlength: 100 },
});

PatientScheme.virtual("fullName").get(function () {
  return `${this.firstName} ${this.lastName}`;
});

PatientScheme.virtual("birthDateFormatted").get(function () {
  return DateTime.fromJSDate(this.birthDate).toLocaleString(DateTime.DATE_MED);
});

module.exports = mongoose.model("Patient", PatientScheme);
