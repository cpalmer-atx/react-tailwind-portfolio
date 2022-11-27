require('dotenv').config({ path: './config/.env' });
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// Routers
app.use('/sanityCheck', require('./routes/sanity'));
app.use('/api/send', require('./routes/nodemailer'));

module.exports = app;