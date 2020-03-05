import { assert } from 'chai'
import { longestPalindrome } from './solution'

describe('Basic Test', function () {
    assert.equal(longestPalindrome('cabad'), 'aba')
    assert.equal(longestPalindrome('cbbd'), 'bb')
    assert.equal(longestPalindrome('ccc'), 'ccc')
    assert.equal(longestPalindrome('aaaa'), 'aaaa')
    assert.equal(longestPalindrome('a'.repeat(498) + 'bc' + 'a'.repeat(500)), 'a'.repeat(500))
})
