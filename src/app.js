/* eslint-disable import/no-import-module-exports */
/* eslint-disable linebreak-style */
import express from 'express';
import passport from 'passport';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import userRouter from '../Router/userRouter';
import config from '../config/db_config';
// eslint-disable-next-line no-unused-vars
// import mongoConnection from '../dbConnection/mongoConnection';

require('dotenv').config();

// const PORT = process.env.PORT || 8001;

const app = express();
app.use(express.json());
app.set('view engine', 'ejs');
// add for google and fb login
require('../config/passport')(passport);

app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: config.MONGO_URI }),
  }),
);
// Passport middleware
app.use(passport.initialize());
app.use(passport.session());
/**
 * --------------------- END ---------------------------\\
 */

app.use(userRouter);

module.exports = app;
