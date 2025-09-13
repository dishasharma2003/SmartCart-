import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware (optional, add later for JSON parsing, etc.)
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("🚀 API is running...");
});

// First connect DB, then start server
const startServer = async () => {
  try {
    await connectDb(); // Connect DB first
    app.listen(port, () => {
      console.log(`✅ Server started at http://localhost:${port}`);
    });
  } catch (err) {
    console.error("❌ Failed to start server:", err.message);
    process.exit(1);
  }
};

startServer();
