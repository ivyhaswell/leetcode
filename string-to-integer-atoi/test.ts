import { assert } from 'chai'
import { myAtoi } from './solution'

describe('Basic Test', function () {
    assert.equal(myAtoi('42'), 42)
    assert.equal(myAtoi('   -42'), -42)
    assert.equal(myAtoi('4193 with words'), 4193)
    assert.equal(myAtoi('words and 987'), 0)
    assert.equal(myAtoi('-91283472332'), -2147483648)
})