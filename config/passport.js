// load all the things we need
// const LocalStrategy = require('passport-local').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;

// load up the user model
const User = require('../Model/user');

// load the auth variables
// var configAuth = require('./auth');

module.exports = function (passport) {
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });

    // code for login (use('local-login', new LocalStategy))
    // code for signup (use('local-signup', new LocalStategy))

    // =========================================================================
    // FACEBOOK ================================================================
    // =========================================================================
    passport.use(new FacebookStrategy({

        clientID: process.env.CLIENT_FB_ID,
        clientSecret: process.env.CLIENT_FB_SECRET,
        callbackURL: process.env.FB_CALLBACK_URL,

    },

    // facebook will send back the token and profile
    function(token, refreshToken, profile, done) {

        // asynchronous
        process.nextTick(function() {

            // find the user in the database based on their facebook id
            User.findOne({ facebookId : profile.id }, function(err, user) {

                // if there is an error, stop everything and return that
                // ie an error connecting to the database
                if (err)
                    return done(err);

                // if the user is found, then log them in
                if (user) {
                    return done(null, user); // user found, return that user
                } else {
                    // if there is no user found with that facebook id, create them
                    const dataToSave = {
                        facebookId: profile.id,
                        name: `${profile.name.givenName} ${profile.name.familyName}`,
                        email: profile.emails[0].value
                    }

                    const newUser            = new User(dataToSave);

                    // set all of the facebook information in our user model
                    // newUser.facebook.id    = profile.id; // set the users facebook id
                    // newUser.facebook.token = token; // we will save the token that facebook provides to the user
                    // newUser.facebook.name  = profile.name.givenName + ' ' + profile.name.familyName; // look at the passport user profile to see how names are returned
                    // newUser.facebook.email = profile.emails[0].value; // facebook can return multiple emails so we'll take the first

                    // save our user to the database
                    newUser.save(function(err) {
                        if (err)
                            throw err;

                        // if successful, return the new user
                        return done(null, newUser);
                    });
                }

            });
        });

    }));

};
