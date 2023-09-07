const express = require('express');
const messageRoutes = express.Router();
const Message = require('../models/request');

messageRoutes.post('/message', async (req, res) => {
  try {
    let message = new Message({
      name: req.body.name,
      email: req.body.email,
      subject: req.body.subject,
      message: req.body.message
    });
    await message.save();
    res.status(200).json({ message: 'Message saved successfully', message });
  } catch (error) {
    // Handle any errors
    res.status(500).json({ message: error.toString() });
  }
});

messageRoutes.get('/all-messages', async (req, res) => {
  try {
    const messages = await Message.find();
    res.status(200).json({ messages });
  } catch (error) {
    res.status(500).json({ message: error.toString() });
  }
});

module.exports = messageRoutes;