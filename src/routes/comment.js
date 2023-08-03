const express = require("express");
const controllers = require("../controllers");
const router = express.Router();

router.get("/:videoId", controllers.comment.getCommentListByVideoId);
router.post("/", controllers.comment.submitComment);

module.exports = router;
