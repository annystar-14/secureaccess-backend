const express = require("express");
const { verificarEstado } = require("../controllers/system.controller");

const router = express.Router();

router.get("/ciberseg", verificarEstado);

module.exports = router;