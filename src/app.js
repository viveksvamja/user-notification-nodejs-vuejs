const express = require('express')
const cors = require('cors')
const path = require('path');

// Get routers
const routes = require('./routers/routes')

// Initialize express server
const app = express()

app.use(express.json())
app.use(cors())

// Use router
app.use('/', routes);

app.use(express.static(path.join(__dirname, 'frontend', 'dist')));

app.get('*', (req, res) => {
  res.sendFile(__dirname, '/frontend/dist/index.html');
});

module.exports = app