import { assert } from 'chai'
import { grayCode } from './solution'

describe('Basic Test', function () {
    assert.deepEqual(grayCode(2), [0, 1, 3, 2])
    assert.deepEqual(grayCode(0), [0])
})