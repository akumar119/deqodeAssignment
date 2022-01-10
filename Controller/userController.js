const bcrypt = require('bcrypt');
const User = require('../Model/user');

// make api just for jest testing on api
const userSignup = async (req, res) => {
  try {
    console.log('req>>>>>>>>', req.body);
    if (req.body && req.body.password) {
      const password = await bcrypt.hash(req.body.password, 8);
      req.body.password = password;
    }
    const user = new User(req.body);
    const data = await user.save();
    delete data.password;
    res.status(201).send({ message: 'signup successfully.', data });
  } catch (err) {
    res.status(400).send(err);
  }
};

module.exports = {
  userSignup,
};
