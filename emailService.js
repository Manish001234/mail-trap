// emailService.js
const nodemailer = require('nodemailer');

// Create a transporter with your email service provider's settings
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'manish@mushroomworldbpl.com',    // replace with your Gmail email address
    pass: 'abcd1234',     // replace with your Gmail password or an app-specific password
  },
});

// Function to send an email
const sendEmail = (to, subject, text) => {
  const mailOptions = {
    from: 'manish@mushroomworldbpl.com',   // replace with your Gmail email address
    to,
    subject,
    text,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};

module.exports = { sendEmail };
