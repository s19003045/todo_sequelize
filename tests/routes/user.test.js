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


// 測試 POST /users/register
describe('#Sign up', () => {
  before(async function () {
    // 在所有測試開始前會執行的程式碼區塊
    await User.destroy({ where: {}, truncate: true })
  });

  after(async function () {
    // 在所有測試結束後會執行的程式碼區塊
    await User.destroy({ where: {}, truncate: true })
  });


  // [0]成功註冊
  it('[O]成功註冊 POST /users/register', (done) => {
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

  // [1]註冊失敗
  it('[X]輸入資料不得有空格 POST /users/register', (done) => {
    request(app)
      .post('/users/register')
      .send('name=Jo  hn')
      .end(function (err, res) {
        expect(res.text).to.contains('不得有空格')
        done()
      })
  })

  // [2]註冊失敗
  it('[X]所有欄位都是必填 POST /users/register', (done) => {
    request(app)
      .post('/users/register')
      .send('name=&email=&password=&password2=')
      .end(function (err, res) {
        expect(res.text).to.contains('所有欄位都是必填')
        done()
      })
  })

  // [3]註冊失敗
  it('[X]密碼輸入錯誤 POST /users/register', (done) => {
    request(app)
      .post('/users/register')
      .send('name=name&email=email&password=password&password2=password2')
      .end(function (err, res) {
        expect(res.text).to.contains('密碼輸入錯誤')
        done()
      })
  })

})