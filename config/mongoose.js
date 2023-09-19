require("dotenv").config();

// MONGODB CONNECTION THROUGH MONGOOSE MODULE
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://amansingh60046:Aman1704@acoding1704.zomv0zw.mongodb.net/db');

const db = mongoose.connection;

db.on('error',console.error.bind(console,"Error connecting to MongoDB ......"));

db.once('open',function(){
    console.log('Connected to Database :: Mongodb')
});

module.exports = db;
