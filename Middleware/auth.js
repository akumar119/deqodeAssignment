/* eslint-disable no-underscore-dangle */
import jwt from 'jsonwebtoken';
import User from '../Model/user';

const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer', '');
    console.log('auth1>>>>>>>', token);
    const decoded = jwt.verify(token, process.env.JWT_SECRET_USER);
    console.log('auth2>>>>>>>', decoded);
    const user = await User.findOne({ _id: decoded._id });
    if (!user) {
      throw new Error('Unathorize user!');
    }
    req.user = user;
    req.token = token;
    next();
  } catch (err) {
    res.status(401).send({ error: 'please Authenticate' });
  }
};

export default auth;
