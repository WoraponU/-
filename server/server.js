const express = require('express');
const path = require('path');
const compression = require('compression');

const app = express();
app.use(compression());

// Serve static assets
// const publicPath = path.join(__dirname, '..', '/public');
// const bundlePath = path.join(__dirname, '..', '/dist');
// app.use('/dist', express.static(bundlePath));
// app.use('/public', express.static(publicPath));

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '/dist/index.html'));
});

module.exports = app;
