import { assert } from 'chai'
import { reverseString } from './solution'

describe('Basic Test', function () {
    let s1 = ["h", "e", "l", "l", "o"]
    let s2 = ["H", "a", "n", "n", "a", "h"]
    let s3 = ["h"]
    let s4 = []

    reverseString(s1)
    reverseString(s2)
    reverseString(s3)
    reverseString(s4)

    assert.deepEqual(s1, ["o", "l", "l", "e", "h"])
    assert.deepEqual(s2, ["h", "a", "n", "n", "a", "H"])
    assert.deepEqual(s3, ["h"])
    assert.deepEqual(s4, [])
})