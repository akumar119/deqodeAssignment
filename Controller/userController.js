const bcrypt = require('bcrypt');
const User = require('../Model/user');

// make api just for jest testing on api
const userSignup = async (req, res) => {
  try {
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

const userLogin = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      throw new Error('This email does not register with us.');
    }
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      throw new Error('Incorrect Password!');
    }
    res.status(200).send('login successfully');
  } catch (err) {
    res.status(400).send(err);
  }
};

module.exports = {
  userSignup,
  userLogin,
};
