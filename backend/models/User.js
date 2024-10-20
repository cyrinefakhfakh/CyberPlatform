const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  team: { type: String, enum: ['Red', 'Blue'], required: true },
  score: { type: Number, default: 0 },
  badges: [{ type: String }],
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
