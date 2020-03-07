import { assert } from 'chai'
import { isValid } from './solution'

describe('Basic Test', function () {
    assert.equal(isValid('()'), true)
    assert.equal(isValid('()[]{}'), true)
    assert.equal(isValid('(]'), false)
    assert.equal(isValid('([)]'), false)
    assert.equal(isValid('{[]}'), true)
    assert.equal(isValid('{[]}'), true)
    assert.equal(isValid('{[()]}[()][[[()]]]'), true)
    assert.equal(isValid('(([]){})'), true)
    assert.equal(isValid('(('), false)
    assert.equal(isValid(''), true)
})