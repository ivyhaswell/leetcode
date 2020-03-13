import { assert } from 'chai'
import { threeSumClosest } from './solution'

describe('Basic Test', function () {
    assert.equal(threeSumClosest([-1, 2, 1, -4], 1), 2)
    assert.equal(threeSumClosest([0, 2, 1, -3], 1), 0)
    assert.equal(threeSumClosest([1, 1, 1, 1], 0), 3)
})