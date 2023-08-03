const Video = require("../models/video.model");

const getVideoThumbnailList = async (req, res) => {
  try {
    const videos = await Video.find({});

    const videoList = videos.map((video) => {
      return {
        title: video.title,
        urlThumbnail: video.urlThumbnail,
      };
    });

    res.status(200).json(videoList);
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred while fetching the video list." });
  }
};

module.exports = {
  getVideoThumbnailList,
};
