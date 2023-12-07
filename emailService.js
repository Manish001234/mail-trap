
const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'manish@gmail.com',    // replace with your Gmail email address
    pass: 'abcd134',     
  },
});


const sendEmail = (to, subject, text) => {
  const mailOptions = {
    from: 'manish@gmail.com',   
    to,
    subject,
    text,
  };


  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};

module.exports = { sendEmail };
