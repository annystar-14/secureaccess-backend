
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const systemRoutes = require("./routes/system.routes");
const authRoutes = require("./routes/auth.routes");

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const HOST = process.env.HOST || "127.0.0.1";

const origenesPermitidos = [
  "http://localhost:5173",
  process.env.FRONTEND_ORIGIN
].filter(Boolean);

if (!process.env.JWT_SECRET) {
  throw new Error("Falta JWT_SECRET");
}

app.disable("x-powered-by");
app.use(helmet());

app.use(cors({
  origin: origenesPermitidos,
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json({ limit: "10kb" }));
app.use("/api", systemRoutes);
app.use("/api/auth", authRoutes);

app.listen(PORT, HOST, () => {
  console.log(`Servidor escuchando en ${HOST}:${PORT}`);
});
