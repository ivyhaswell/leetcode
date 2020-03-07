import { assert } from 'chai'
import { maxArea } from './solution'

describe('Basic Test', function () {
    assert.equal(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]), 49)
    assert.equal(maxArea([2, 3, 10, 5, 7, 8, 9]), 36)
    assert.equal(maxArea([1, 3, 2, 5, 25, 24, 5]), 24)
})