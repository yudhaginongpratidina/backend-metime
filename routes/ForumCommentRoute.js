const express = require("express");
const router = express.Router();

const ForumCommentController = require("../controllers/ForumCommentController");

router.get("/api/forum/comments/:forumDiskusiId", ForumCommentController.getForumCommentByForumId);
router.post("/api/forum/comments", ForumCommentController.createForumComment);
router.delete("/api/forum/comments/:id", ForumCommentController.deleteForumCommentById);

module.exports = router;