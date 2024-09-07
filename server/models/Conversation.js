const mongoose = require("mongoose");

const ConversationSchema = new mongoose.Schema({
  user: String,
  message: String,
  response: String,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Conversation", ConversationSchema);
