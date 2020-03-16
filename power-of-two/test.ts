import { assert } from 'chai'
import { isPowerOfTwo } from './solution'

describe('Basic Test', function () {
    assert.equal(isPowerOfTwo(1), true)
    assert.equal(isPowerOfTwo(16), true)
    assert.equal(isPowerOfTwo(218), false)
})