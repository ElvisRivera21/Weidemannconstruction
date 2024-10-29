// Import dependencies
const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config();

// Initialize Express app
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Route to handle form submissions
app.post('/send-email', async (req, res) => {
  const { name, email, phone, budget, startDate, city, message } = req.body;

  try {
    // Nodemailer configuration
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,  // Your email from .env
        pass: process.env.EMAIL_PASS,  // Your app password from .env
      },
    });

    // Set up email options
    let mailOptions = {
      from: email,  // Customer's email
      to: 'kyle@weidemannconstruction.com',  // Your recipient email
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

    // Send email
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
