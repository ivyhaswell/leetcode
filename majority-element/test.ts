import { assert } from 'chai'
import { majorityElement } from './solution'

describe('Basic Test', function () {
    assert.equal(majorityElement([3, 2, 3]), 3)
    assert.equal(majorityElement([2, 2, 1, 1, 1, 2, 2]), 2)
})