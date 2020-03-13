import { assert } from 'chai'
import { search } from './solution'

describe("Basic Test", function () {
    assert.equal(search([4, 5, 6, 7, 0, 1, 2], 0), 4)
    assert.equal(search([4, 5, 6, 7, 0, 1, 2], 3), -1)
    assert.equal(search([1, 3], 3), 1)
    assert.equal(search([5, 1, 3], 5), 0)
})