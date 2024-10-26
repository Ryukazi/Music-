// app.js
const express = require('express');
const app = express();
const PORT = 3000;

// Serve static files
app.use(express.static('public'));

// Route to serve HTML file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
