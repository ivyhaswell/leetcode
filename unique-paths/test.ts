import { assert } from 'chai'
import { uniquePaths } from './solution'

describe('Basic Test', function () {
    assert.equal(uniquePaths(7, 3), 28)
})