import express from 'express';
import { userSignup, userLogin, userList } from '../Controller/userController';
// import auth from '../Middleware/auth';

const validator = require('express-joi-validation').createValidator({});
const userValidator = require('./userValidator');

const router = express.Router();

router.get('/', (req, res) => {
  console.log('router is working');
  res.status(200).send('WELCOME TO DEQODE.');
});

// make this api just for jest testing
router.post('/user/signup', validator.body(userValidator.signupUser), userSignup);

// makes this api just for jest testing
router.post('/user/login', validator.body(userValidator.loginUser), userLogin);

// list users
router.get('/user/list', validator.query(userValidator.listUser), userList);

// eslint-disable-next-line import/prefer-default-export
export default router;
