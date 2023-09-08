const express = require('express');
const messageRoutes = express.Router();
const Message = require('../models/request');
const nodemailer = require('nodemailer');
const { google } = require('googleapis');


const transporter = nodemailer.createTransport({
  service: 'hotmail', // Use the Gmail service
  auth: {
    user: 'outlook_8F87BF6D0AD80771@outlook.com', // Replace with your Gmail email address
    pass: 'adikah2030', // Replace with your Gmail password or generate an app-specific password
  },
});

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

    const mailOptions = {
      from: 'outlook_8F87BF6D0AD80771@outlook.com',
      to: 'erickadikah2030@gmail.com',
      subject: 'New Message Received',
      text: `You have received a new message from ${message.name} (${message.email}).\n\nSubject: ${message.subject}\n\nMessage: ${message.message}`,
    };
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Message saved successfully', message });
  } catch (error) {
    console.error('Error:', error); // Add this line
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