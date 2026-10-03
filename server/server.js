const express = require("express");
const cors = require("cors");
const path = require("path");

// Load .env from server directory or project root
require("dotenv").config({ path: path.join(__dirname, ".env") });
require("dotenv").config();

const connectDB = require("./config/db");
const authRoutes = require("./routes/auth");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to Database
connectDB();

// Root & Health check routes
app.get("/", (req, res) => {
  res.json({
    status: "online",
    message: "AI Interview Portal Backend Server is running!",
  });
});

app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "healthy", timestamp: new Date().toISOString() });
});

// Authentication routes
app.use("/api/auth", authRoutes);
// Also mount at /api for convenience (/api/register, /api/login)
app.use("/api", authRoutes);

// Global Error Handler
app.use((err, req, res, next) => {
  console.error("Unhandled Error:", err.stack);
  res.status(500).json({
    success: false,
    message: "Internal server error.",
  });
});

const PORT = process.env.PORT || 5000;

if (!process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
}

module.exports = app;