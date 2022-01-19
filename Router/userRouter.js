import express from 'express';
import passport from 'passport';
import { userSignup, userLogin, userList } from '../Controller/userController';
// import auth from '../Middleware/auth';

const validator = require('express-joi-validation').createValidator({});
const userValidator = require('./userValidator');

const router = express.Router();

// router.get('/', (req, res) => {
//   console.log('router is working');
//   res.status(200).send('WELCOME TO DEQODE.');
// });

// make this api just for jest testing
router.post('/user/signup', validator.body(userValidator.signupUser), userSignup);

// makes this api just for jest testing
router.post('/user/login', validator.body(userValidator.loginUser), userLogin);

// list users
router.get('/user/list', validator.query(userValidator.listUser), userList);

/**
 *  ADD NEW CODE FOR FACEBOOK LOGIN -------------------------------------\\
 */
// route middleware to make sure a user is logged in
// eslint-disable-next-line consistent-return
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }// <-- typo here
  res.redirect('/');
}
// route for home page
router.get('/', (req, res) => {
  res.render('index.ejs'); // load the index.ejs file
});

// route for login form
// route for processing the login form
// route for signup form
// route for processing the signup form

// route for showing the profile page
router.get('/profile', isLoggedIn, (req, res) => {
  res.render('profile.ejs', {
    user: req.user, // get the user out of session and pass to template
  });
});

// =====================================
// FACEBOOK ROUTES =====================
// =====================================
// route for facebook authentication and login
router.get('/auth/facebook', passport.authenticate('facebook', {
  scope: ['public_profile', 'email'],
}));

// handle the callback after facebook has authenticated the user
router.get(
  '/auth/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect: '/profile',
    failureRedirect: '/',
  }),
);

// route for logging out
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});
/**
 * *************************************END**********************************\
 */
/**
 * *********************************GOOGLE LOGIN ****************************\
 */
router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/profile');
  },
);

// eslint-disable-next-line import/prefer-default-export
export default router;
