var express = require("express");
var router = express.Router();
const PrescriptionController = require("../controllers/prescriptionsController");

router.get("/list", PrescriptionController.prescription_list_get);

router.post("/create", PrescriptionController.prescription_create_post);

router.get("/:id/update", PrescriptionController.prescription_update_get);

router.put("/:id/update", PrescriptionController.prescription_update_put);

module.exports = router;
