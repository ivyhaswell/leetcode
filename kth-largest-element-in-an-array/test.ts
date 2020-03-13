import { assert } from 'chai'
import { findKthLargest } from './solution'
import { findKthLargest as findKthLargest2 } from './solution2'

describe('Basic Test', function () {
    assert.equal(findKthLargest([3, 2, 1, 5, 6, 4], 2), 5)
    assert.equal(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4), 4)

    assert.equal(findKthLargest2([3, 2, 1, 5, 6, 4], 2), 5)
    assert.equal(findKthLargest2([3, 2, 3, 1, 2, 4, 5, 5, 6], 4), 4)
})