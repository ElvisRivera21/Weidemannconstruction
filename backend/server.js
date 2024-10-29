const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();

// CORS configuration
app.use(cors({
  origin: 'https://weidemannconstruction.vercel.app', // Your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Middleware to parse JSON bodies
app.use(express.json());

// Your send-email route
app.post('/send-email', async (req, res) => {
  const { name, email, phone, budget, startDate, city, message } = req.body;

  try {
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    let mailOptions = {
      from: email,
      to: 'kyle@weidemannconstruction.com',
      subject: 'New Quote Request',
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Budget: ${budget}
        Start Date: ${startDate}
        City: ${city}
        Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Error sending email' });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
