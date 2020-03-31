require('dotenv').config();

const request = require('supertest');
const app = require('../lib/app');
const connect = require('../lib/utils/connect');
const mongoose = require('mongoose');
const User = require('../lib/models/User');

describe('auth routes', () => {
  beforeAll(() => {
    connect();
  });

  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });

  afterAll(() => {
    return mongoose.connection.close();
  });

  it('signs up a user', () => {
    return request(app)
      .post('/api/v1/auth/signup')
      .send({ username: 'j0shf0rd', password: 'sup3rs3cr3t' })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          username: 'j0shf0rd',
          __v: 0
        });
      });
  });

  it('logs in a user', async() => {
    await User.create({ username: 'j0shf0rd', password: 'sup3rs3cr3t' });
    return request(app)
      .post('/api/v1/auth/login')
      .send({ username: 'j0shf0rd', password: 'sup3rs3cr3t'})
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          username: 'j0shf0rd',
          __v: 0
        });
      });
  });
});
