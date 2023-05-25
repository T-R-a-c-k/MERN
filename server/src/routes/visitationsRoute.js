var express = require("express");
var router = express.Router();
const VisitationController = require("../controllers/visitationController");

router.get("/list", VisitationController.visitation_list_get);

router.post("/create", VisitationController.visitation_create_post);

router.get("/:id/update", VisitationController.visitation_update_get);

router.put("/:id/update", VisitationController.visitation_update_put);

router.delete("/:id/delete", VisitationController.visitation_delete_delete);

module.exports = router;
