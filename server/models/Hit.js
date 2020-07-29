const mongoose = require("mongoose");

const hitSchema = new mongoose.Schema({
  story_id: String,
  story_title: String,
  story_url: String,
  created_at: String,
  author: String,
  title: String,
  url: String,
});

module.exports = mongoose.model("Hit", hitSchema);
