const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname)));

// Login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Replace with your own validation logic
  if (username === 'pp' && password === 'uu') {
    res.send('Login successful');
  } else {
    res.status(401).send('Invalid username or password');
  }
});

// Catch-all route to serve the login.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'login.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

