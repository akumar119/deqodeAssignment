/* eslint-disable no-undef */
const supertest = require('supertest');
const mongoose = require('mongoose');
const app = require('../src/app');

beforeEach((done) => {
  mongoose.connect(
    'mongodb://localhost:27017/JestDB',
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => done(),
  );
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
