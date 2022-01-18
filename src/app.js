/* eslint-disable import/no-import-module-exports */
/* eslint-disable linebreak-style */
// import mongoose from 'mongoose';
import express from 'express';
import passport from 'passport';
import userRouter from '../Router/userRouter';
// eslint-disable-next-line no-unused-vars
// import mongoConnection from '../dbConnection/mongoConnection';

require('dotenv').config();

// const PORT = process.env.PORT || 8001;

const app = express();
app.use(express.json());
app.set('view engine', 'ejs');
require('../config/passport')(passport);

app.use(userRouter);

module.exports = app;
