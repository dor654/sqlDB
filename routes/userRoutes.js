// routes/userRoutes.js
const express = require("express");
const {
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");
const auth = require("../middleware/auth");
const role = require("../middleware/role");

const router = express.Router();

router.get("/", auth, role("admin"), getUsers); // Only admins can get all users
router.get("/:id", auth, getUser); // Any authenticated user can get their own data
router.put("/:id", auth, role("admin"), updateUser); // Only admins can update users
router.delete("/:id", auth, role("admin"), deleteUser); // Only admins can delete users

module.exports = router;
