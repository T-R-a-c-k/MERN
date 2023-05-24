const Visitation = require("../models/visitationsModel");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");
const auth = require("../authenticationServer/encryptServer");

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
      res.json(errors);
      return;
    }
    await visitationInstance.save();
    res.json(visitationInstance);
  }),
];

exports.visitation_update_get = asyncHandler(async (req, res, next) => {
  if (!auth.validID(req.params.id)) {
    res.status(404).json("This visitation does not exist");
    return;
  }
  const visitationInstance = await Visitation.findById(req.params.id, {
    __v: 0,
  }).exec();
  res.json(visitationInstance);
});

exports.visitation_update_put = [
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
    if (!auth.validID(req.params.id)) {
      res.status(404).json("This visitation does not exist");
      return;
    }
    const errors = validationResult(req);

    if (!errors.isEmpty) {
      res.status(401).json(errors);
      return;
    }

    const visitationInstance = new Visitation({
      _id: req.params.id,
      occurredDate: req.body.occurredDate,
      note: req.body.note,
      prescription: req.body.prescription,
    });
    Visitation.findByIdAndUpdate(req.params.id, visitationInstance).exec();
    res.json(visitationInstance);
  }),
];
