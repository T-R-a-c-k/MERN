var express = require("express");
var router = express.Router();
const StaffController = require("../controllers/staffController");

router.get("/list", StaffController.staff_list_get);

router.post("/create", StaffController.staff_create_post);

router.post("/login", StaffController.staff_login_post);

module.exports = router;
