const Patient = require("../models/patientsModel");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");
const { processToken } = require("../authenticationServer/encryptServer");

exports.patient_list_get = asyncHandler(async (req, res, next) => {
  try {
    const token = processToken(req.headers.authorization);
    if (token.role !== "admin") {
      res.status(403).json("authorization error");
    }
    const allPatients = await Patient.find({}, { _id: 0, __v: 0 }).exec();
    res.json(allPatients);
  } catch (err) {
    res.status(403).json("authorization error");
  }
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
    try {
      const token = processToken(req.headers.authorization);
      if (token.role !== "admin") {
        res.status(403).json("authorization error");
      }
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
    } catch (err) {
      res.status(403).json("authorization error");
    }
  }),
];

exports.patient_update_get = asyncHandler(async (req, res, next) => {
  const patientInstance = await Patient.findOne(
    {
      email: req.params.email,
    },
    { _id: 0, id: 0, __v: 0 }
  ).exec();
  patientInstance
    ? res.json(patientInstance)
    : res.status(404).json("This patient does not exist");
});

exports.patient_update_put = [
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
    try {
      const token = processToken(req.headers.authorization);
      if (token.role !== "admin") {
        res.status(403).json("authorization error");
      }
      const errors = validationResult(req);
      const existingPatient = await Patient.findOne({
        email: req.body.email,
      }).exec();
      if (!errors.isEmpty) {
        res.status(401).json(errors);
        return;
      }

      if (!existingPatient) {
        res.status(404).json("This patient doesn't exist");
        return;
      }

      const patientInstance = new Patient({
        _id: existingPatient._id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        birthDate: req.body.birthDate,
        medicalNumber: req.body.medicalNumber,
        email: req.body.email,
        visitations: existingPatient.visitations,
      });

      Patient.findByIdAndUpdate(existingPatient._id, patientInstance).exec();
      res.json(patientInstance);
    } catch (err) {
      res.status(403).json("authorization error");
    }
  }),
];
