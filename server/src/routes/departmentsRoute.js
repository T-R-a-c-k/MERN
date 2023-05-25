var express = require("express");
var router = express.Router();
const DepartmentController = require("../controllers/departmentsController");

router.get("/list", DepartmentController.departments_list);

router.post("/create", DepartmentController.departments_create_post);

router.get("/:id/update", DepartmentController.departments_update_get);

router.put("/:id/update", DepartmentController.departments_update_put);

router.delete("/:id/delete", DepartmentController.departments_delete_delete);

module.exports = router;
