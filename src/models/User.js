
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  dob: { type: Date, default: null },
  createdPortfolio: { type: Array, default: [] },
  role: { type: String, default: 'User' },
  parentId: { type: Array, default: [] },
  childId: { type: Array, default: [] },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
                