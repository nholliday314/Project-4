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
  }
}, {
  timestamps: true,
});

// userSchema.pre('save', async function(next) {
//   // 'this' is the user document
//   if (!this.isModified('password')) return next();
//   // Replace the password with the computed hash
//   this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
// });

module.exports = mongoose.model('Pulse', pulseSchema);