const Patient = require("../models/patientsModel");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

exports.patient_list_get = asyncHandler(async (req, res, next) => {
  const allPatients = await Patient.find({}).exec();
  res.json(allPatients);
});

exports.patient_create_get = asyncHandler(async (req, res, next) => {
  res.json("This is the patient get end point");
});

exports.patient_create_post = [
  body("firstName")
    .isLength({ max: 100, min: 1 })
    .escape()
    .withMessage("First Name must be specified."),
  body("lastName")
    .isLength({ max: 100, min: 1 })
    .escape()
    .withMessage("Last Name must be specified."),
  body("birthDate")
    .isLength({ min: 1 })
    .escape()
    .withMessage("Birth Date must be specified.")
    .isDate()
    .withMessage("Must be a date format")
    .isISO8601()
    .toDate(),
  body("medicalNumber")
    .isInt({ min: 1 })
    .escape()
    .withMessage("Medical Number must be specified."),
  body("email")
    .isEmail()
    .withMessage("Must be email format")
    .isLength({ min: 1 })
    .withMessage("Email must be specified"),
  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);
    const patientInstance = new Patient({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      birthDate: req.body.birthDate,
      medicalNumber: req.body.medicalNumber,
      email: req.body.email,
      visitations: req.body.visitations,
    });

    if (!errors.isEmpty) {
      res.json(errors);
      return;
    }

    await patientInstance.save();
    res.json(patientInstance);
  }),
];
