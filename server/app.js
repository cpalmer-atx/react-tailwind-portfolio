require('dotenv').config({ path: './config/.env' });
const nodemailer = require('nodemailer');
const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: 'OAuth2',
    user: process.env.EMAIL,
    pass: process.env.PWORD,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
  }
});

transporter.verify((err, success) => {
  err ? console.log(err) : console.log(`Server ready to take messages: ${success}`);
});

let mailOptions = {
  from: "test@gmail.com",
  to: process.env.EMAIL,
  subject: "Nodemailer API test",
  text: "This is a message from your first nodemailer API.  If you're reading this in your inbox, it works!"
};

// transporter.sendMail(mailOptions, (err, data) => {
//   err ? console.log(`ERROR: ${err}`) : console.log('Success!  Email was sent');
// });

// Routers
app.use('/sanityCheck', require('./routes/sanity'));

module.exports = app;