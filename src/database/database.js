const mongoose = require("mongoose");

const uri = 'mongo uri';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Database connected successfully');
});


