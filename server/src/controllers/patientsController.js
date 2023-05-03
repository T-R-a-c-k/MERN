const Patients = require("../models/patients");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

exports.patient_list = asyncHandler(async (req, res, next) => {
  const allPatients = await Patients.find({}).exec();
  res.json(allPatients);
});
