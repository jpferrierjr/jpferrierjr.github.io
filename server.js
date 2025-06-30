const express = require('express');
const path = require('path');
const app = express();

// Use the PORT environment variable if it's available, otherwise default to 3001
const port = process.env.PORT || 3000;

// This tells Express to serve any static files from the 'build' directory
app.use(express.static(path.join(__dirname, 'docs')));

// This is a "catch-all" route. For any request that doesn't match a static file,
// it sends back the main index.html file. This is crucial for single-page apps like React.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'docs', 'index.html'));
});

// Start the server and listen on the defined port
app.listen(port, () => {
  console.log(`React app server listening on port ${port}`);
});