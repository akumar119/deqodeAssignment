/* eslint-disable consistent-return */
/* eslint-disable no-underscore-dangle */
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../Model/user';
import checkDuplicateEmail from './userServices';

// make api just for jest testing on api
export const userSignup = async (req, res) => {
  try {
    console.log('req.body>>>>>>>>>>>>', req.body);
    // check duplicate email
    const checkDupEmail = await checkDuplicateEmail(req.body.email);
    console.log(checkDupEmail);
    if (checkDupEmail) {
      res.status(400).send({ message: 'This email is already register with us.' });
      return 1;
    }
    if (req.body && req.body.password) {
      const password = await bcrypt.hash(req.body.password, 8);
      req.body.password = password;
    }
    const user = new User(req.body);
    const data = await user.save();
    console.log('data>>>>>>>>>>>', data);
    const token = jwt.sign({ _id: data._doc._id }, process.env.JWT_SECRET_USER);
    delete data._doc.password;
    const response = { ...data._doc, token };
    res.status(201).send({ message: 'signup successfully.', response });
  } catch (err) {
    console.log('error in userSignup>>>>>>>>>>', err);
    res.status(400).send(err);
  }
};

export const userLogin = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      throw new Error('This email does not register with us.');
    }
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      throw new Error('Incorrect Password!');
    }
    delete user._doc.password;
    const token = jwt.sign({ _id: user._doc._id }, process.env.JWT_SECRET_USER);
    const response = { ...user._doc, token };
    res.status(200).send({ message: 'login successfully!', data: response });
  } catch (err) {
    console.log('error in userLogin>>>>>>>', err);
    res.status(400).send(err);
  }
};

export const userList = async (req, res) => {
  try {
    const criteria = {
      status: 'ACTIVE',
    };
    const project = {
      name: 1,
      email: 1,
      status: 1,
    };
    const option = {
      skip: req.query.skip || 0,
      limit: req.query.limit || 10,
      sort: { createdAt: -1 },
    };
    const users = await User.find(criteria, project, option);
    res.status(200).send(users);
  } catch (err) {
    res.status(400).send(err);
  }
};
