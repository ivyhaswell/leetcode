import { assert } from 'chai'
import { maxProfit } from './solution'

describe('Basic Test', function () {
    assert.equal(maxProfit([7, 1, 5, 3, 6, 4]), 7)
    assert.equal(maxProfit([1, 2, 3, 4, 5]), 4)
    assert.equal(maxProfit([7, 6, 4, 3, 1]), 0)
})