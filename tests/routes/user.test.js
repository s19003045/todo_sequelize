const assert = require('assert');
const chai = require('chai')
const should = chai.should()
const { expect } = require('chai')
const db = require('../../models')
const User = db.User
const app = require('../../app')
const request = require('supertest')

// 測試 GET /users/register
describe('#Sign up', () => {
  it('GET /users/register', (done) => {
    request(app)
      .get('/users/register')
      .end(function (err, res) {
        expect(res.statusCode).to.be.equal(200)
        expect(res.text).to.contains('Register')
        done()
      })
  })
})

// 測試 POST /users/register
describe('#Sign up', () => {
  it('POST /users/register', (done) => {
    request(app)
      .post('/users/register')
      .send('name=name&email=email&password=password&password2=password')
      .end(function (err, res) {
        User.findOne({
          where: {
            email: 'email'
          }
        })
          .then((user) => {
            expect(user.email).to.be.equal('email')
            done()
          })
      })
  })
})