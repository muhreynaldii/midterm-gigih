const Product = require("../models/product.model");

const getProductListByVideoId = async (req, res) => {
  const { videoId } = req.params;

  try {
    const products = await Product.find({ videoID: videoId });

    res.status(200).json(products);
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred while fetching the product list." });
  }
};

module.exports = {
  getProductListByVideoId,
};
