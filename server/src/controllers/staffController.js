const Staff = require("../models/staffModel");
const asyncHandler = require("express-async-handler");
const auth = require("../authenticationServer/encryptServer");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config({ path: ".env" });

const { body, validationResult } = require("express-validator");

const removeUnwantedData = (user) => {
  const userObject = Object.create(user);
  userObject.password = undefined;
  userObject.__v = undefined;
  return userObject.toObject();
};

exports.staff_list_get = asyncHandler(async (req, res, next) => {
  const allStaff = await Staff.find({}, { _id: 0, __v: 0, password: 0 }).exec();
  res.json(allStaff);
});

exports.staff_create_post = asyncHandler(async (req, res, next) => {
  const {
    firstName,
    lastName,
    position,
    salary,
    deptID,
    phoneNumber,
    email,
    hireDate,
    password,
    role,
  } = req.body;
  const hash = await auth.encrypt(password);

  const staffInstance = new Staff({
    firstName,
    lastName,
    position,
    salary,
    deptID,
    phoneNumber,
    email,
    hireDate,
    password: hash,
    role,
  });

  await staffInstance.save();
  res.json(staffInstance);
});

exports.staff_login_post = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  const user = await Staff.findOne({ email: email }, { _id: 0 }).exec();

  if (!user) {
    res.status(404);
    res.json("This user does not exist");
    return;
  } else {
    const hash = await auth.validateUser(password, user.password);
    if (hash) {
      const userObject = removeUnwantedData(user);
      const token = jwt.sign(userObject, process.env.TOKEN_PASSWORD);
      res.json({ token, user: userObject });
    } else {
      res.status(403);
      res.json("This password and username do not match");
    }
  }
});

exports.staff_update_get = asyncHandler(async (req, res, next) => {
  const staffInstance = await Staff.findOne(
    { email: req.params.email },
    { password: 0, __v: 0 }
  ).exec();
  res.json(staffInstance);
});

exports.staff_update_post = [
  body("firstName")
    .isLength({ max: 100, min: 1 })
    .escape()
    .withMessage("First Name must be specified and less than 100 characters."),
  body("lastName")
    .isLength({ max: 100, min: 1 })
    .escape()
    .withMessage("Last Name must be specified and less than 100 characters."),
  body("position")
    .isLength({ min: 1 })
    .escape()
    .withMessage("Position must be specified."),
  body("salary")
    .isInt({ min: 1 })
    .escape()
    .withMessage("Salary must be specified."),
  body("deptID")
    .isLength({ min: 1 })
    .escape()
    .withMessage("Department ID must be specified."),
  body("phoneNumber")
    .isEmail()
    .withMessage("Must be phone number format")
    .isLength({ min: 1 })
    .withMessage("Phone number must be specified"),
  body("email")
    .isEmail()
    .withMessage("Must be email format")
    .isLength({ min: 1 })
    .withMessage("Email must be specified"),
  body("hireDate")
    .isLength({ min: 1 })
    .escape()
    .withMessage("Hired Date must be specified.")
    .isDate()
    .withMessage("Must be a date format")
    .isISO8601()
    .toDate(),
  body("role").isLength({ min: 1 }).withMessage("Role must be specified"),
  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);
    const existingStaff = await Staff.findOne({
      email: req.body.email,
    }).exec();
    if (!errors.isEmpty) {
      res.status(401).json(errors);
      return;
    }

    if (!existingStaff) {
      res.status(404).json("This staff member doesn't exist");
      return;
    }

    const staffInstance = new Staff({
      _id: existingStaff._id,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      position: req.body.position,
      salary: req.body.salary,
      deptID: req.body.deptID,
      phoneNumber: req.body.phoneNumber,
      email: req.body.email,
      hireDate: req.body.hireDate,
      password: existingStaff.password,
      role: req.body.role,
    });

    Staff.findByIdAndUpdate(existingStaff._id, staffInstance).exec();
    res.json(staffInstance);
  }),
];
