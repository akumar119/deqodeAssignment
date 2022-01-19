import mongoose from 'mongoose';

const { Schema } = mongoose;

const profileUrlSchema = {
  original: { type: String, trim: true, default: '' },
  thumbnail: { type: String, trim: true, default: '' },
};

const userSchema = new Schema({
  name: { type: String, required: true, index: true },
  email: { type: String, required: true, index: true },
  password: { type: String, index: true },
  facebookId: { type: String, index: true },
  googleId: { type: String, index: true },
  profileImg: { type: profileUrlSchema },
  isLoginWithFB: { type: Boolean, default: false },
  isLoginWithGoogle: { type: Boolean, default: false },
  status: {
    type: String, enum: ['ACTIVE', 'DELETED', 'BLOCKED'], default: 'ACTIVE', required: true, index: true,
  },
}, { timestamps: true });

const user = mongoose.model('user', userSchema);
export default user;
