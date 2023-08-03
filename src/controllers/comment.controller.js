const Comment = require("../models/comment.model");

const getCommentListByVideoId = async (req, res) => {
  try {
    const comments = await Comment.find({ videoID: videoId });

    res.status(200).json(comments);
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred while fetching the comment list." });
  }
};

const submitComment = async (req, res) => {
  const { username, comment, videoId } = req.body;

  try {
    const newComment = new Comment({
      videoID: videoId,
      username: username,
      comment: comment,
    });

    await newComment.save();

    res.status(200).json({ message: "Success" });
  } catch (error) {
    res.status(500).json({ message: "Fail", error: error.message });
  }
};

module.exports = {
  getCommentListByVideoId,
  submitComment,
};
