const assert = require('assert');
const chai = require('chai')
const should = chai.should()
const { expect } = require('chai')
const db = require('../models')
const User = db.User
const app = require('../app')
const request = require('supertest')


describe('Array', function () {
  describe('#indexOf()', function () {

    before(() => {
      console.log('=======before======')
    })

    beforeEach(() => {
      console.log('=======beforeEach======')
    })

    afterEach(() => {
      console.log('=======afterEach======')
    })

    after(() => {
      console.log('=======after======')
    })

    it('should return -1 when the value is not present', function () {
      // node.js 內建的斷言庫
      assert.equal([1, 2, 3].indexOf(4), -1);
    });

    it('should return -1 when the value is not present(compare difference of assertion', function () {
      // 比較斷言庫的差異
      const data = [1, 2, 3].indexOf(4)

      assert.equal(data, -1);
      chai.assert.equal(data, -1)
      chai.expect(data).to.equal(-1)
      data.should.equal(-1)
    })
  })
})


describe('# User Model', () => {

  describe('CRUD', () => {

    let data = null

    it('create', (done) => {
      db.User.create({}).then((user) => {
        data = user
        done()
      })
    })
    it('read', (done) => {
      db.User.findByPk(data.id).then((user) => {
        expect(data.id).to.be.equal(user.id)
        done()
      })
    })
    it('update', (done) => {
      db.User.update({}, { where: { id: data.id } }).then(() => {
        db.User.findByPk(data.id).then((user) => {
          expect(data.updatedAt).to.be.not.equal(user.updatedAt)
          done()
        })
      })
    })
    it('delete', (done) => {
      db.User.destroy({ where: { id: data.id } }).then(() => {
        db.User.findByPk(data.id).then((user) => {
          expect(user).to.be.equal(null)
          done()
        })
      })
    })
  })
})

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