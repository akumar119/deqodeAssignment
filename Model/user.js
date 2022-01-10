const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String, required: true, index: true },
  email: { type: String, required: true, index: true },
  password: { type: String, required: true, index: true },
}, { timestamps: true });

module.exports = mongoose.model('user', userSchema);
