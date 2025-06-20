const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config();

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: process.env.CORS_URL, credentials: true }));

// Routes
app.get("/", (req,res)=>{
  res.send("Server is Running...")
});
app.use("/api/auth", require("./routes/authRoutes"));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
