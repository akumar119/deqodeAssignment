import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String, required: true, index: true },
  email: { type: String, required: true, index: true },
  password: { type: String, required: true, index: true },
  facebookId: { type: String, index: true },
  isLoginWithFB: { type: Boolean, default: false },
  status: {
    type: String, enum: ['ACTIVE', 'DELETED', 'BLOCKED'], default: 'ACTIVE', required: true, index: true,
  },
}, { timestamps: true });

const user = mongoose.model('user', userSchema);
export default user;
