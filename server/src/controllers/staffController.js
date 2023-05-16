const Staff = require("../models/staffModel");
const asyncHandler = require("express-async-handler");
const auth = require("../authentication/encrypt");

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
