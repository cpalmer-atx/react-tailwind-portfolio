require('dotenv').config({ path: '../config/.env'});
const nodemailer = require('nodemailer');

exports.sendMail = async (req, res) => {
  const { name, email, message } = req.body;

  let transporter = nodemailer.createTransport({
    host: process.env.HOST,
    port: process.env.SMTP_PORT,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PWORD
    }
  });

  let form = {
    from: process.env.EMAIL,
    to: process.env.GMAIL,
    replyTo: email,
    subject: `Portfolio form submittal from ${name}`,
    text: message
  }

  await transporter.sendMail(form, (err, data) => {
    err ?
      res.status(401).json({ msg: err }) :
      res.status(200).json({ msg: 'success!', body: req.body, data: data });
  });
};