const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const nodemailer = require('nodemailer');

const app = express();

// Middleware
app.use(express.json());

// Routers
app.use('/sanityCheck', require('./routes/sanity'));

module.exports = app;