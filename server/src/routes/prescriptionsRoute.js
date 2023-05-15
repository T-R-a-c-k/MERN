var express = require("express");
var router = express.Router();
const PrescriptionController = require("../controllers/prescriptionsController");

router.get("/list", PrescriptionController.prescription_list_get);

router.get("/create", PrescriptionController.prescription_create_get);

router.post("/create", PrescriptionController.prescription_create_post);

module.exports = router;
