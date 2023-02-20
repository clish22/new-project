//  RESTFUL api express server
const express = require('express');
const app = express();
// const cors = require('cors');
const path = require('path');
require('dotenv').config();

const port = process.env.PORT || 3001;

// middleware
// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('../client/build'));

// routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from server!' });
});

// start server
app.listen(port, () => console.log(`Listening on http://localhost:${port}/`));
