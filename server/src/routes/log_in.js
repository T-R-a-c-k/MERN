var express = require("express");
var router = express.Router();
const PatientsController = require("../controllers/patientsController");

router.get("/", PatientsController.patient_list);

module.exports = router;
