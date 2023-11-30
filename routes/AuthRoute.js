const express = require("express");
const router = express.Router();

const LoginController = require("../controllers/LoginController");

// LOGIN ADMIN
router.post("/api/login/admin", LoginController.loginAdmin);

// LOGIN USER
router.post("/api/login/user", LoginController.loginUser);

module.exports = router;