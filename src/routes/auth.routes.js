const express = require("express");
const { login } = require("../controllers/auth.controller");
const { verificarToken } = require("../middlewares/auth.middleware");
const { loginLimiter } = require("../middlewares/loginLimiter.middleware");

const router = express.Router();

router.post("/login", loginLimiter, login);

router.get("/dashboard", verificarToken, (req, res) => {
  res.status(200).json({
    message: "Bienvenido al dashboard protegido",
    usuario: req.usuario
  });
});

module.exports = router;