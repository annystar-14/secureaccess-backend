
const { rateLimit } = require("express-rate-limit");

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: "draft-8",
  legacyHeaders: false,
  skipSuccessfulRequests: true,
  message: {
    message: "Demasiados intentos. Intenta nuevamente en 15 minutos."
  }
});

module.exports = { loginLimiter };
