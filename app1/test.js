const request = require('supertest');
const app = require('./index');

describe('User API', () => {
  it('GET /users should return all users', async () => {
    const res = await request(app).get('/users');
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBe(2);
  });

  it('GET /users/:id should return a user', async () => {
    const res = await request(app).get('/users/1');
    expect(res.statusCode).toBe(200);
    expect(res.body.name).toBe('John Doe');
  });

  it('POST /users should create a new user', async () => {
    const res = await request(app)
      .post('/users')
      .send({ name: 'Test User' });
    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe('Test User');
  });
});