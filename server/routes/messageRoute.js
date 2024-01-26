const express = require('express');
const messageRoutes = express.Router();
const Message = require('../models/request');
const postmark = require('postmark');
require('dotenv').config();
const postmarkClient = new postmark.ServerClient(process.env.POSTMARK_API_KEY);

messageRoutes.post('/message', async (req, res) => {
  console.log('Received POST request');
  try {
    let message = new Message({
      name: req.body.name,
      email: req.body.email,
      subject: req.body.subject,
      message: req.body.message
    });
    await message.save();

    const sendResult = await postmarkClient.sendEmail({
      From: 'info@acuitus-duo.co.ke',
      To: 'acuitusduo@gmail.com',
      Subject: 'Request',
      TextBody: `You have received a new message from ${message.name} (${message.email}).\n\nSubject: ${message.subject}\n\nMessage: ${message.message}`,
    });

    console.log('Email sent:', sendResult);

    res.status(200).json({ message: 'Message saved successfully', message });
  } catch (error) {
    console.error('Error:', error);
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