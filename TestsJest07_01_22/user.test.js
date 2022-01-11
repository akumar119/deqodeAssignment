/* eslint-disable no-undef */
import supertest from 'supertest';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import app from '../src/app';
import User from '../Model/user';

const userOne = {
  _id: new mongoose.Types.ObjectId(),
  email: 'test123@yopmail.com',
  password: bcrypt.hashSync('qwerty', 8),
  name: 'test',
};

beforeEach((done) => {
  mongoose.connect(
    'mongodb://localhost:27017/JestDB',
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => done(),
  );
});
beforeEach(async () => {
  const user = new User(userOne);
  await user.save();
});
afterEach((done) => {
  mongoose.connection.db.dropDatabase(() => {
    mongoose.connection.close(() => done());
  });
});

test('should signup a new user', async () => {
  await supertest(app).post('/user/signup').send({
    name: 'amit',
    email: 'amit1234@yopmail.com',
    password: 'qwerty',
  }).expect(201);
});

test('should login exixting user', async () => {
  await supertest(app).post('/user/login').send({
    email: userOne.email,
    password: 'qwerty',
  }).expect(200);
});

test('should login non-existing user', async () => {
  await supertest(app).post('/user/login').send({
    email: userOne.email,
    password: 'ytrewq',
  }).expect(400);
});
