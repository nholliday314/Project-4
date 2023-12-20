const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;

console.log('database connection', db)

db.on('connected', function () {
  console.log(`Connected to ${db.name} at ${db.host}:${db.port}`);
});

db.on('error', (err) => {
  console.error(`Mongoose connection error: ${err}`);
});

db.on('disconnected', () => {
  console.log('Mongoose disconnected from the database');
});