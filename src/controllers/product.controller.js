const models = require("../models");

const getProductListByVideoId = async (req, res) => {
  const { videoId } = req.params;

  try {
    const products = await models.Product.find({ videoId: videoId });

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
