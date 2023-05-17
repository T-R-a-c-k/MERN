var express = require("express");
var router = express.Router();
const PatientController = require("../controllers/patientsController");

router.get("/", PatientController.patient_list_get);

router.get("/create", PatientController.patient_create_get);

router.post("/create", PatientController.patient_create_post);

module.exports = router;