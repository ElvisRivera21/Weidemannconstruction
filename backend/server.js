const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();

// CORS configuration
app.use(cors({
  origin: 'https://your-frontend-url', // Replace with your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Middleware to parse JSON bodies
app.use(express.json());

// Email route
app.post('/send-email', async (req, res) => {
  const { name, email, phone, budget, startDate, city, message } = req.body;

  try {
    let transporter = nodemailer.createTransport({
  host: 'smtp.mail.me.com', // iCloud's SMTP server
  port: 587,               // SMTP port
  secure: false,           // Use TLS (secure: false for port 587)
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});


    let mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'kyle@weidemannconstruction.com', // Replace with your recipient's email
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
    console.error('Error sending email:', error); // Log the full error
    res.status(500).json({ error: 'Error sending email', details: error.message });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
