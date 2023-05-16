var express = require("express");
var router = express.Router();
const StaffController = require("../controllers/staffController");

router.get("/", StaffController.staff_create_get);
router.post("/", StaffController.staff_create_post);

module.exports = router;
