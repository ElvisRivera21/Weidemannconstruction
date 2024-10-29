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
      from: email, // Customer's email address
      to: 'kyle@weidemannconstruction.com', // Your desired recipient
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
    console.error('Error sending email:', error); // Log the error
    res.status(500).json({ error: 'Error sending email' });
  }
});
