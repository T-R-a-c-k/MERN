const Visitation = require("../models/visitationsModel");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

exports.visitation_list_get = asyncHandler(async (req, res, next) => {
  const allVisitations = await Visitation.find({}, { __v: 0 }).exec();
  res.json(allVisitations);
});

exports.visitation_create_post = [
  // Validate and sanitize fields.
  body("occuredDate")
    .isLength({ min: 1 })
    .escape()
    .withMessage("Date must be specified.")
    .isDate()
    .withMessage("Must be a date format")
    .isISO8601()
    .toDate(),
  body("prescription")
    .isLength({ min: 1 })
    .escape()
    .withMessage("Prescription must be specified."),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);
    const visitationInstance = new Visitation({
      occurredDate: req.body.occurredDate,
      note: req.body.note,
      prescription: req.body.prescription,
    });

    if (!errors.isEmpty) {
      res, json(errors);
      return;
    }
    await visitationInstance.save();
    res.json(visitationInstance);
  }),
];
