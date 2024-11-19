const express = require("express");
const route = express.Router();

route.post('/activateServer', (req, res) => {
    // This could be any logic to initialize the server or resources
    console.log('Server initialization triggered');
  
    // Send back a success response
    res.status(200).json({ message: 'Server is ready' });
  });