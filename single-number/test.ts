import { assert } from 'chai'
import { singleNumber } from './solution'

describe('Basic Test', function () {
    assert.equal(singleNumber([2, 2, 1]), 1)
    assert.equal(singleNumber([4, 1, 2, 2, 1]), 4)
})