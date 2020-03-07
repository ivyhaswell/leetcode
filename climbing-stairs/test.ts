import { assert } from 'chai'
import { climbStairs } from './solution'

describe('Basic Test', function () {
    assert.equal(climbStairs(0), 0)
    assert.equal(climbStairs(1), 1)
    assert.equal(climbStairs(2), 2)
    assert.equal(climbStairs(3), 3)
    assert.equal(climbStairs(4), 5)
    assert.equal(climbStairs(5), 8)
    assert.equal(climbStairs(6), 13)
})
