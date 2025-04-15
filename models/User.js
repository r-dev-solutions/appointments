const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'employee', 'client'], required: true },
  businessId: { type: mongoose.Schema.Types.ObjectId, ref: 'Business' }
});

module.exports = mongoose.model('User', UserSchema);