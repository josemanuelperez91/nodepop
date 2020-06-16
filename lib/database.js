const mongoose = require('mongoose');

const DATABASE_URI =
  process.env.NODE_ENV === 'development'
    ? 'mongodb://localhost/nodepop'
    : process.env.MONGODB_URI;

mongoose.connect(DATABASE_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const database = mongoose.connection;

database.on('error', console.error.bind(console, 'Connection error:'));
database.on('open', () => {
  console.log('Connection success');
});

module.exports = database;
