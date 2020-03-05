import { assert } from 'chai'
import { lengthOfLongestSubstring } from './solution'

describe('Basic Test', function () {
    assert.equal(lengthOfLongestSubstring("abcabcbb"), 3)
    assert.equal(lengthOfLongestSubstring("au"), 2)
    assert.equal(lengthOfLongestSubstring("aa"), 1)
    assert.equal(lengthOfLongestSubstring("aab"), 2)
    assert.equal(lengthOfLongestSubstring("cdd"), 2)
})