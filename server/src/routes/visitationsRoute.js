var express = require("express");
var router = express.Router();
const VisitationController = require("../controllers/visitationController");

router.get("/list", VisitationController.visitation_list_get);

router.get("/create", VisitationController.visitation_create_get);

router.post("/create", VisitationController.visitation_create_post);

module.exports = router;
