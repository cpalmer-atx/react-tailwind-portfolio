require('dotenv').config({ path: './config/.env' });
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// Routers
app.use('/sanityCheck', require('./routes/sanity'));
app.use('/api/send', require('./routes/nodemailer'));

if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../build')));
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, '../', 'build', 'index.html'))
  );
} else {
  app.get('/', (req, res) => res.send('Please set to production'))
}

module.exports = app;