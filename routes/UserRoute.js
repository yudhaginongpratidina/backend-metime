const express = require("express");
const router = express.Router();

const UserController = require("../controllers/UserController");

router.get("/api/users", UserController.getUsers);
router.get("/api/users/:id", UserController.getUserById);
router.get("/api/users/email/:email", UserController.getUserByEmail);

router.post("/api/users", UserController.createUser);
router.patch("/api/users/email/:id", UserController.updateEmailById);
router.patch("/api/users/name/:id", UserController.updateNameById);
router.patch("/api/users/password/:id", UserController.updatePasswordById);

router.delete("/api/users/:id", UserController.deleteUserById);

module.exports = router;