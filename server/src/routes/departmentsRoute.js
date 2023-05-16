var express = require("express");
var router = express.Router();
const DepartmentController = require("../controllers/departmentsController");

router.get("/list", DepartmentController.departments_list);

router.get("/", DepartmentController.departments_create_get);

router.post("/", DepartmentController.departments_create_post);

module.exports = router;
