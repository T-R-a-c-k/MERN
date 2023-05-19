const Prescription = require("../models/prescriptionsModel");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

exports.prescription_list_get = asyncHandler(async (req, res, next) => {
  const prescriptions = await Prescription.find(
    {},
    { name: 1, usage: 1, sideEffects: 1, _id: 0 }
  )
    .sort({ name: 1 })
    .exec();
  res.json(prescriptions);
});

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
