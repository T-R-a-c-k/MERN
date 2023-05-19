const Department = require("../models/departmentsModel");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

exports.departments_list = asyncHandler(async (req, res, next) => {
  const allDepartments = await Department.find({}, { __v: 0 }).exec();
  res.json(allDepartments);
});

exports.departments_create_post = [
  body("name")
    .isLength({ max: 100, min: 1 })
    .escape()
    .withMessage("Name must be specified."),
  body("location")
    .isLength({ max: 100, min: 1 })
    .escape()
    .withMessage("Location must be specified."),
  body("budget")
    .isInt({ min: 1 })
    .escape()
    .withMessage("Budget must be specified."),
  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);
    const departmentInstance = new Department({
      name: req.body.name,
      location: req.body.location,
      budget: req.body.budget,
    });

    if (!errors.isEmpty) {
      res.json(errors);
      return;
    }

    await departmentInstance.save();
    res.json(departmentInstance);
  }),
];
