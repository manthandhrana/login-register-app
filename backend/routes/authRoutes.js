const express = require("express");
const router = express.Router();

// Importing controller functions correctly
const {
  registerUser,
  loginUser,
  getProtectedData,
} = require("../controllers/authController");

// Importing middleware correctly
const protect = require("../middleware/authMiddleware");

// ✅ Routes
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/protected", protect, getProtectedData);

module.exports = router;
