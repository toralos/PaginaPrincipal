const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuarioController");
 
router.get("/", usuarioController.register);

router.post("/registerSCC", usuarioController.recuperoPost);

module.exports = router; 