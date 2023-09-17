// Import the express module
const express = require('express');
const port = 5001;
// Create an express app
const app = express();

const db = require('./config/mongoose');
// Start the server
app.listen(port, function (error) {
    if (error) {
      console.log(`Error in connecting with server: ${error}`);
    }
    console.log(`Successfully connecting with server ${port}`);
});