const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Placement_Cell-development');

const db = mongoose.connection;

db.on('error',console.error.bind(console,"Error connecting to MongoDB ......"));

db.once('open',function(){
    console.log('Connected to Database :: Mongodb')
})


module.exports = db;