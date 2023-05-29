const express = require("express");
const router = express.Router();
const productosController = require("../controllers/productosController");

router.get("/", productosController.productos);
router.get("/:id", productosController.detail);


module.exports = router;