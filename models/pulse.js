const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pulseSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  userId: {
    type: String,
    required: true
  }

}, {
  timestamps: true,
});

module.exports = mongoose.model('Pulse', pulseSchema);