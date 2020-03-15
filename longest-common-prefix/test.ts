import { assert } from 'chai'
import { longestCommonPrefix } from './solution'

describe('Basic Test', function () {
    assert.equal(longestCommonPrefix(['flower', 'flow', 'flight']), 'fl')
    assert.equal(longestCommonPrefix(['dog', 'racecar', 'car']), '')
    assert.equal(longestCommonPrefix(['color', 'color', 'color']), 'color')
})