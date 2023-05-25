const Visitation = require("../models/visitationsModel");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");
const auth = require("../authenticationServer/encryptServer");

exports.visitation_list_get = asyncHandler(async (req, res, next) => {
  try {
    const token = auth.processToken(req.headers.authorization);
    if (token.role !== "admin") {
      res.status(403).json("authorization error");
    }
    const allVisitations = await Visitation.find({}, { __v: 0 }).exec();
    res.json(allVisitations);
  } catch (err) {
    res.status(403).json("authorization error");
  }
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
    try {
      const token = auth.processToken(req.headers.authorization);
      if (token.role !== "admin") {
        res.status(403).json("authorization error");
      }
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
    } catch (err) {
      res.status(403).json("authorization error");
    }
  }),
];

exports.visitation_update_get = asyncHandler(async (req, res, next) => {
  try {
    const token = auth.processToken(req.headers.authorization);
    if (token.role !== "admin") {
      res.status(403).json("authorization error");
    }
    if (!auth.validID(req.params.id)) {
      res.status(404).json("This visitation does not exist");
      return;
    }
    const visitationInstance = await Visitation.findById(req.params.id, {
      __v: 0,
    }).exec();
    res.json(visitationInstance);
  } catch (err) {
    res.status(403).json("authorization error");
  }
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
    try {
      const token = auth.processToken(req.headers.authorization);
      if (token.role !== "admin") {
        res.status(403).json("authorization error");
      }
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
    } catch (err) {
      res.status(403).json("authorization error");
    }
  }),
];

exports.visitation_delete_delete = asyncHandler(async (req, res, next) => {
  try {
    const token = auth.processToken(req.headers.authorization);
    if (token.role !== "admin") {
      res.status(403).json("authorization error");
    }
    const visitationInstance = await Visitation.findOne({
      _id: req.params.id,
    }).exec();
    if (!visitationInstance) {
      res.status(404).json("visitation not found");
      return;
    }

    Visitation.deleteOne({ _id: visitationInstance._id }).exec();
    res.json("Successfully deleted.");
  } catch (err) {
    res.status(403).json("authorization error");
  }
});
