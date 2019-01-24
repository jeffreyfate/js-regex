import { match } from './Match.js'

import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
import sinonChai from 'sinon-chai'

chai.use(sinonChai)
chai.use(chaiAsPromised)

// const expect = chai.expect
const assert = chai.assert

describe('MatchWord', () => {
  beforeEach(() => {
  })

  afterEach(() => {
  })

  describe('match', () => {
    beforeEach(() => {
    })

    afterEach(() => {
    })

    it('handles no input', () => {
      let matches = match()

      assert.deepEqual(matches, [])
    })

    it('handles bad input number', () => {
      let matches = match(1)

      assert.deepEqual(matches, [])
    })

    it('handles bad input undefined', () => {
      let matches = match(undefined)

      assert.deepEqual(matches, [])
    })

    it('handles bad input partial undefined', () => {
      let matches = match("test", undefined)

      assert.deepEqual(matches, [])
    })

    it('matches single word once', () => {
      let matches = match('this is a test, simply a test', 'simply')

      assert.deepEqual(matches, ['simply'])
    })

    it('matches a single word occurring multiple times', () => {
      let matches = match('this is a test, simply a test', 'test')

      assert.deepEqual(matches, ['test'])
    })

    it('matches a multiple words piped', () => {
      let matches = match('hello beautiful little world, hello', 'hello|world')

      assert.deepEqual(matches, ['hello', 'world'])
    })

    it('matches a multiple words in order', () => {
      let matches = match('hello beautiful little world, hello', 'world|hello')

      assert.deepEqual(matches, ['world', 'hello'])
    })
  })
})
