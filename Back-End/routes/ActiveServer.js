const express = require("express");
const route = express.Router();  // Use express.Router() to create a route

// Define the POST route to activate the server
route.post('/activateServer', (req, res) => {
  console.log('Server initialization triggered');
  res.status(200).json({ message: 'Server is ready' });
});

// Export the router
module.exports = route;  // Make sure to export the route here
