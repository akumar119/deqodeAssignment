/* eslint-disable linebreak-style */
// import mongoose from 'mongoose';
import express from 'express';
import userRouter from '../Router/userRouter';
// eslint-disable-next-line no-unused-vars
import mongoConnection from '../dbConnection/mongoConnection';

require('dotenv').config();

const PORT = process.env.PORT || 8001;

const app = express();
app.use(express.json());
app.use(userRouter);
app.listen(PORT, () => {
// no-console
  console.log(`server is running at port ${PORT}...`);
});

// app.get('/', (req, res) => {
//   res.status(200).send('babel');
// });
