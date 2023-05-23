var express = require("express");
var router = express.Router();
const DepartmentController = require("../controllers/departmentsController");

router.get("/list", DepartmentController.departments_list);

router.post("/create", DepartmentController.departments_create_post);

router.get("/:id/update", DepartmentController.departments_update_user_get);

module.exports = router;
