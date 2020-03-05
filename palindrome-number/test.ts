import { assert } from 'chai'
import { isPalindrome } from './solution'

describe('basic test', function () {
    assert.equal(isPalindrome(121), true)
    assert.equal(isPalindrome(-121), false)
    assert.equal(isPalindrome(10), false)
})