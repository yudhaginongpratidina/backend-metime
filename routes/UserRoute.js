const express = require("express");
const router = express.Router();

const UserController = require("../controllers/UserController");

router.post("/api/users", UserController.createUser);
router.get("/api/users", UserController.getUsers);

router.get("/api/users/:id", UserController.getUserById);
router.patch("/api/users/:id", UserController.updateUserById);
router.patch("/api/users/test/:id", UserController.updateUserTestById);
router.delete("/api/users/:id", UserController.deleteUserById);

router.post("/api/login", UserController.login);

module.exports = router;