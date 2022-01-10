const express = require('express');
const userController = require('../Controller/userController');

const router = express.Router();

router.get('/', () => {
  console.log('router is working');
});

router.post('/user/signup', userController.userSignup);

// eslint-disable-next-line import/prefer-default-export
module.exports = router;
