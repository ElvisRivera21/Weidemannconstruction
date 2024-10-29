const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config();  // For securely using email credentials stored in an environment file (.env)

const app = express();
app.use(express.json());  // Middleware to parse JSON bodies

// Route to handle form submissions
app.post('/send-email', async (req, res) => {
  const { name, email, phone, budget, startDate, city, message } = req.body;  // Form data sent from the frontend

  try {
    // Nodemailer configuration to send emails
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,  // Your Gmail address
        pass: process.env.EMAIL_PASS,  // Your Gmail password or App password
      },
    });

    // Setup email data
    let mailOptions = {
      from: process.env.EMAIL_USER,  // Sender address (Your Gmail)
      to: 'kyle@weidemannconstruction.com',  // Recipient email address
      subject: 'New Quote Request',  // Email subject
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Budget: ${budget}
        Start Date: ${startDate}
        City: ${city}
        Message: ${message}
      `,  // Email content using template literals for form data
    };

    // Send email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Error sending email' });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
