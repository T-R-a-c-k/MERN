var express = require("express");
var router = express.Router();
const PatientController = require("../controllers/patientsController");

router.get("/list", PatientController.patient_list_get);

router.post("/create", PatientController.patient_create_post);

router.get("/:email/update", PatientController.patient_update_get);

router.put("/:email/update", PatientController.patient_update_put);

module.exports = router;
