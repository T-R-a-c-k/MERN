const Department = require("../models/departmentsModel");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");
const auth = require("../authenticationServer/encryptServer");

exports.departments_list = asyncHandler(async (req, res, next) => {
  try {
    const token = auth.processToken(req.headers.authorization);
    if (token.role !== "admin") {
      res.status(403).json("authorization error");
    }
    const allDepartments = await Department.find({}, { __v: 0 }).exec();
    res.json(allDepartments);
  } catch (err) {
    res.status(403).json("authorization error");
  }
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
    try {
      const token = auth.processToken(req.headers.authorization);
      if (token.role !== "admin") {
        res.status(403).json("authorization error");
      }

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
    } catch (err) {
      res.status(403).json("authorization error");
    }
  }),
];

exports.departments_update_get = asyncHandler(async (req, res, next) => {
  try {
    const token = auth.processToken(req.headers.authorization);
    if (token.role !== "admin") {
      res.status(403).json("authorization error");
    }
    if (!auth.validID(req.params.id)) {
      res.status(404).json("This department does not exist");
      return;
    }
    const id = req.params.id;
    const selectedDepartment = await Department.findById(id, {
      _id: 0,
      name: 1,
      location: 1,
      budget: 1,
    }).exec();
    res.json(selectedDepartment);
  } catch (err) {
    res.status(403).json("authorization error");
  }
});

exports.departments_update_put = [
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
    try {
      const token = auth.processToken(req.headers.authorization);
      if (token.role !== "admin") {
        res.status(403).json("authorization error");
      }
      if (!auth.validID(req.params.id)) {
        res.status(404).json("This department does not exist");
        return;
      }

      const errors = validationResult(req);
      const existingDepartment = Department.findById(req.params.id);

      if (!errors.isEmpty) {
        res.status(401).json(errors);
        return;
      }
      if (!existingDepartment) {
        res.status(404).json("This ID does not exist");
        return;
      }

      const departmentInstance = new Department({
        _id: req.params.id,
        name: req.body.name,
        location: req.body.location,
        budget: req.body.budget,
      });

      Department.findByIdAndUpdate(req.params.id, departmentInstance).exec();
      res.json(departmentInstance);
    } catch (err) {
      res.status(403).json("authorization error");
    }
  }),
];

exports.departments_delete_delete = asyncHandler(async (req, res, next) => {
  try {
    const token = auth.processToken(req.headers.authorization);
    if (token.role !== "admin") {
      res.status(403).json("authorization error");
    }
    const departmentInstance = await Department.findById(req.params.id).exec();
    if (!departmentInstance) {
      res.status(404).json("department not found");
      return;
    }
    Department.deleteOne(departmentInstance).exec();
    res.json("Successfully deleted.");
  } catch (err) {
    res.status(403).json("authorization error");
  }
});
