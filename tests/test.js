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




