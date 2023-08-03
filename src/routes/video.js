const express = require("express");
const controllers = require("../controllers");
const router = express.Router();

router.get("/", controllers.video.getVideoThumbnailList);

module.exports = router;
