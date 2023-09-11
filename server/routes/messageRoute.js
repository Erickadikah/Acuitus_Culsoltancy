const express = require('express');
const messageRoutes = express.Router();
const Message = require('../models/request');
const postmark = require('postmark');
const postmarkClient = new postmark.ServerClient('427bff95-782f-4c77-833a-a2956322af1b');

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
      From: 'acuitus@acuitus-duo.co.ke',
      To: 'ACUITUSDUO@GMAIL.COM',
      Subject: '',
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