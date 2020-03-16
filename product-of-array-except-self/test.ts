import { assert } from 'chai'
import { productExceptSelf } from './solution'

describe('Basic Test', function () {
    assert.deepEqual(productExceptSelf([1, 2, 3, 4]), [24, 12, 8, 6])
    assert.deepEqual(productExceptSelf([0, 0]), [0, 0])
    assert.deepEqual(productExceptSelf([1, 0]), [0, 1])
})