import { assert } from 'chai'
import { reverseWords } from './solution'

describe('Basic Test', function () {
    assert.equal(reverseWords(''), '')
    assert.equal(reverseWords("Let's take LeetCode contest"), "s'teL ekat edoCteeL tsetnoc")
})