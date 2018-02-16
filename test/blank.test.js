/* eslint-disable semi */
const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')

chai.should()
chai.use(chaiAsPromised)

describe('Fake Tests', () => {
  it('1 should equal 1', () => {
    let result = 1

    return result.should.equal(1)
  })
})
