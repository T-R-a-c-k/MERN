var express = require("express");
var router = express.Router();
const VisitationController = require("../controllers/visitationController");

router.get("/", VisitationController.visitation_create_get);

router.post("/", VisitationController.visitation_create_post);

module.exports = router;
