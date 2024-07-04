// routes/authRoutes.js
const express = require("express");
const { register, login } = require("../controllers/authController");
const auth = require("../middleware/auth");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

// Example of a protected route
router.get("/protected", auth, (req, res) => {
  res.status(200).json({ message: "You are authenticated", user: req.user });
});

module.exports = router;
