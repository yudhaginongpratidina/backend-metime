const express = require("express");
const router = express.Router();

const ForumController = require("../controllers/ForumController");

router.get("/api/forum", ForumController.getForum);
router.get("/api/forum/:id", ForumController.getForumById);

router.post("/api/forum", ForumController.createForum);
router.delete("/api/forum/:id", ForumController.deleteForumById);

module.exports = router;