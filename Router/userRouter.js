const express = require('express');

const router = express.Router();

router.get('/', () => {
  console.log('router is working');
});

// eslint-disable-next-line import/prefer-default-export
module.exports = router;
