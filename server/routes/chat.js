const express = require("express");
const generateResponse = require("./llama");
const Conversation = require("../models/Conversation");
const router = express.Router();

router.post("/message", async (req, res) => {
  const { user, message } = req.body;
  const response = await generateResponse(message);

  const conversation = new Conversation({
    user,
    message,
    response,
  });
  await conversation.save();

  res.json({ message, response });
});

module.exports = router;
