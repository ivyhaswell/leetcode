import { assert } from 'chai'
import { containsDuplicate } from './solution'

describe('Basic Test', function () {
    assert.equal(containsDuplicate([1, 2, 3, 1]), true)
    assert.equal(containsDuplicate([1, 2, 3, 4]), false)
    assert.equal(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]), true)
    assert.equal(containsDuplicate([]), false)
})