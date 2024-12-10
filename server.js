const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

require('dotenv').config();

// Sample users data for demonstration
app.get('/api', (req, res) => {
  const users = [
    // Your users array here (same as the one in your current code)
  ];
  
  // Send the users data as JSON response
  res.json(users);
});

// Use the PORT environment variable provided by Elastic Beanstalk
const PORT = process.env.PORT || 3000; // Elastic Beanstalk assigns the port dynamically

const server = app.listen(PORT, () => {
  console.log(`Server API started on port ${PORT}`);
}).on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${PORT} is in use. Try a different port.`);
  } else {
    console.error('Server failed to start:', err);
  }
});
