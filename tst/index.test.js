const { app, server } = require('../src/index');
const supertest = require('supertest');

describe('endpoint', () => {
  it('GET / should return hello world', (done) => {
      supertest(app)
        .get('/')
        .expect(200)
        .then(response => {
          expect(response.text).toBe('Hello World!');
          done();
        })
        .catch(err => done(err));
  });
});

server.close();
