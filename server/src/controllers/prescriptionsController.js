const Prescription = require("../models/prescriptions");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

exports.prescription_create_get = asyncHandler(async (req, res, next) => {
  res.json("This is the prescription get end point");
});

exports.prescription_create_post = [
  // Validate and sanitize fields.
  body("name")
    .isLength({ min: 1 })
    .escape()
    .withMessage("Name must be specified."),
  body("usage")
    .isLength({ min: 1 })
    .escape()
    .withMessage("Usage must be specified.")
    .isAlphanumeric()
    .withMessage("Usage has non-alphanumeric characters."),
  body("sideEffects")
    .isLength({ min: 1 })
    .escape()
    .withMessage("Usage must be specified."),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);
    const prescriptionInstance = new Prescription({
      name: req.body.name,
      usage: req.body.usage,
      sideEffects: req.body.sideEffects,
    });

    if (!errors.isEmpty) {
      res, json(errors);
      return;
    }
    await prescriptionInstance.save();
    res.json(prescriptionInstance);
  }),
];
