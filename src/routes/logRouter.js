const express = require("express");
const router = express.Router();
const logController = require("../controllers/logController");
 
router.get("/", logController.visualizo);

router.post("/index", logController.login)

module.exports = router; 