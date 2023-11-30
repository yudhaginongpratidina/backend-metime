const express = require("express");
const router = express.Router();

const MessageController = require("../controllers/MessageController");

router.get("/api/messages", MessageController.getMessages);
router.get("/api/messages/:id", MessageController.getMessageById);
router.post("/api/messages", MessageController.createMessage);
router.delete("/api/messages/:id", MessageController.deleteMessageById);

module.exports = router;