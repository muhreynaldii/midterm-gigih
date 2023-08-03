const express = require("express");
const controllers = require("../controllers");
const router = express.Router();

router.get("/:videoId", controllers.product.getProductListByVideoId);

module.exports = router;
