import { assert } from 'chai'
import { threeSum } from './solution'

describe('Basic Test', function () {
    assert.deepEqual(
        threeSum([-1, 0, 1, 2, -1, -4]),
        [
            [-1, -1, 2],
            [-1, 0, 1],
        ],
    )
    assert.deepEqual(
        threeSum([0, 0]),
        [],
    )
})