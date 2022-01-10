const Joi = require('joi');

module.exports = {
  signupUser: Joi.object({
    name: Joi.string().min(2).required(),
    email: Joi.string().min(3).trim().lowercase()
      .required(),
    password: Joi.string().min(5).required(),

  }),
  loginUser: Joi.object({
    email: Joi.string().min(3).trim().lowercase()
      .required(),
    password: Joi.string().min(5).required(),
  }),
};
