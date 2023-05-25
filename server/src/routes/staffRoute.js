var express = require("express");
var router = express.Router();
const StaffController = require("../controllers/staffController");

router.get("/list", StaffController.staff_list_get);

router.post("/create", StaffController.staff_create_post);

router.post("/login", StaffController.staff_login_post);

router.get("/:email/update", StaffController.staff_update_get);

router.put("/:email/update", StaffController.staff_update_put);

router.delete("/:email/delete", StaffController.staff_delete_delete);

module.exports = router;
