// import express from 'express';
// import userController from '../Controller/userController'

const express = require('express');
const validator = require('express-joi-validation').createValidator({});
const userController = require('../Controller/userController');
const userValidator = require('./userValidator');

const router = express.Router();

router.get('/', (req, res) => {
  console.log('router is working');
  res.status(200).send('WELCOME TO DEQODE.');
});

// make this api just for jest testing
router.post('/user/signup', validator.body(userValidator.signupUser), userController.userSignup);

// makes this api just for jest testing
router.post('/user/login', validator.body(userValidator.loginUser), userController.userLogin);

// eslint-disable-next-line import/prefer-default-export
module.exports = router;
