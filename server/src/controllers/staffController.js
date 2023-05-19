const Staff = require("../models/staffModel");
const asyncHandler = require("express-async-handler");
const auth = require("../authenticationServer/encryptServer");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config({ path: ".env" });

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

exports.staff_create_get = asyncHandler(async (req, res, next) => {
  res.json("This is the login get end point");
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

exports.staff_login_get = asyncHandler(async (req, res, next) => {
  res.json("This is the staff login get end point");
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
