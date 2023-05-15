var express = require("express");
var router = express.Router();
const DepartmentController = require("../controllers/departmentController");

router.get("/", DepartmentController.departments_create_get);

router.post("/", DepartmentController.departments_create_post);

module.exports = router;
