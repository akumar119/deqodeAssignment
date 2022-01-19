/* eslint-disable max-len */
// load all the things we need
// const LocalStrategy = require('passport-local').Strategy;
// eslint-disable-next-line import/no-import-module-exports
import User from '../Model/user';// load up the user model

const FacebookStrategy = require('passport-facebook').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
// const User = require('../Model/user');

// load the auth variables
// var configAuth = require('./auth');

module.exports = (passport) => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  // used to deserialize the user
  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });

  // code for login (use('local-login', new LocalStategy))
  // code for signup (use('local-signup', new LocalStategy))

  // =========================================================================
  // FACEBOOK ================================================================
  // =========================================================================
  passport.use(new FacebookStrategy(
    {
      clientID: process.env.CLIENT_FB_ID,
      clientSecret: process.env.CLIENT_FB_SECRET,
      callbackURL: process.env.FB_CALLBACK_URL,
    },
    // facebook will send back the token and profile
    (token, refreshToken, profile, done) => {
      // asynchronous
      process.nextTick(() => {
        // find the user in the database based on their facebook id
        User.findOne({ facebookId: profile.id }, (err, user) => {
        // if there is an error, stop everything and return that
        // ie an error connecting to the database
          console.log('profile is>>>>>>>>', profile);
          if (err) {
            return done(err);
          }
          // if the user is found, then log them in
          if (user) {
            return done(null, user); // user found, return that user
          }
          // if there is no user found with that facebook id, create them
          const dataToSave = {
            facebookId: profile.id,
            name: `${profile.name.givenName} ${profile.name.familyName}`,
            email: profile.emails[0].value,
          };

          const newUser = new User(dataToSave);

          // set all of the facebook information in our user model
          // newUser.facebook.id    = profile.id; // set the users facebook id
          // newUser.facebook.token = token; // we will save the token that facebook provides to the user
          // newUser.facebook.name  = profile.name.givenName + ' ' + profile.name.familyName; // look at the passport user profile to see how names are returned
          // newUser.facebook.email = profile.emails[0].value; // facebook can return multiple emails so we'll take the first

          // save our user to the database
          newUser.save((error) => {
            if (error) {
              throw error;
            }
            // if successful, return the new user
            return done(null, newUser);
          });
        });
      });
    },
  ));
  /**
   * Google---------------------------------------------------------------------------------------\\
   */
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: '/auth/google/callback',
      },
      async (accessToken, refreshToken, profile, done) => {
        // get the user data from google
        const newUser = {
          googleId: profile.id,
          isLoginWithGoogle: true,
          name: `${profile.name.givenName} ${profile.name.familyName}`,
          'profileImg.original': profile.photos[0].value,
          'profileImg.thumbnail': profile.photos[0].value,
          email: profile.emails[0].value,
        };

        try {
          // find the user in our database
          let user = await User.findOne({ googleId: profile.id });
          if (user) {
            // If user present in our database.
            done(null, user);
          } else {
            // if user is not preset in our database save user data to database.
            user = await User.create(newUser);
            done(null, user);
          }
        } catch (err) {
          console.error(err);
        }
      },
    ),
  );
};
