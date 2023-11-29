const express = require("express");
const router = express.Router();

const UserController = require("../controllers/UserController");

router.get("/api/users", UserController.getUsers);
router.get("/api/users/:id", UserController.getUserById);

router.post("/api/users", UserController.createUser);
router.patch("/api/users/:id", UserController.updateUserById);
router.delete("/api/users/:id", UserController.deleteUserById);

module.exports = router;