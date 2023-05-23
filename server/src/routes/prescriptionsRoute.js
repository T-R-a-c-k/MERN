var express = require("express");
var router = express.Router();
const PrescriptionController = require("../controllers/prescriptionsController");

router.get("/list", PrescriptionController.prescription_list_get);

router.post("/create", PrescriptionController.prescription_create_post);

router.get("/:id/update", PrescriptionController.prescription_update_get);

router.post("/:id/update", PrescriptionController.prescription_update_post);

module.exports = router;
