/* eslint-disable no-undef */
import chai from 'chai';
import chaiHttp from 'chai-http';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import User from '../Model/user';
import app from '../src/app';

// assertion
chai.should();
// bcoz of chia-http, we can call chai.request()
chai.use(chaiHttp);

const user = {
  name: 'user2',
  email: 'user2@yopmail.com',
  password: bcrypt.hashSync('qwerty', 8),
};

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

describe('app', () => {
  describe('user', () => {
    it('should signup a new user', async () => {
      const response = await chai.request(app).post('/user/signup').send({
        name: 'user1',
        email: 'user1@yopmail.com',
        password: 'qwerty',
      });
      response.should.have.status(201);
      response.should.be.a('object');
      // console.log(response);
    });
    it('should be login a user', async () => {
      await new User(user).save();
      const response = await chai.request(app).post('/user/login').send({
        email: 'user2@yopmail.com',
        password: 'qwerty',
      });
      response.should.have.status(200);
    });
  });
});
