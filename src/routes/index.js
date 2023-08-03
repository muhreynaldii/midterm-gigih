const express = require("express");
const router = express.Router();
const videoRouter = require("./video");
const productRouter = require("./product");
const commentRouter = require("./comment");

router.use("/video", videoRouter);
router.use("/product", productRouter);
router.use("/comment", commentRouter);

module.exports = router;
