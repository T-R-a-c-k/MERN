var express = require("express");
var router = express.Router();
const PrescriptionController = require("../controllers/prescriptionsController");

router.get("/", PrescriptionController.prescription_create_get);

router.post("/", PrescriptionController.prescription_create_post);

module.exports = router;
