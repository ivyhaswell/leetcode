import { assert } from 'chai'
import { findMedianSortedArrays } from './solution'

describe('Basic Test', function () {
    assert.equal(findMedianSortedArrays([1, 3], [2]), 2)
    assert.equal(findMedianSortedArrays([1, 2], [3, 4]), 2.5)
})