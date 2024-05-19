const mongoose = require("mongoose");

const uri = 'mongodb+srv://kritibanka21cse:docgen0705@docgen.t2c1e7e.mongodb.net/';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Database connected successfully');
});


