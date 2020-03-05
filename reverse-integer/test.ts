import { assert } from 'chai'
import { reverse } from './solution'

describe('Basic Test', function () {
    assert.equal(reverse(41), 14)
    assert.equal(reverse(-123), -321)
    assert.equal(reverse(120), 21)
})