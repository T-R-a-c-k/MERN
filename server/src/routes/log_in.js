var express = require("express");
var router = express.Router();
const PatientsController = require("../controllers/patientsController");

router.get("/", PatientsController.patient_create_get);

module.exports = router;
