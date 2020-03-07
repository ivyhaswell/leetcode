import { assert } from 'chai'
import { canWinNim } from './solution'

describe('Basic Test', function () {
    assert.equal(canWinNim(1), true)
    assert.equal(canWinNim(3), true)
    assert.equal(canWinNim(4), false)
    assert.equal(canWinNim(5), true)
    assert.equal(canWinNim(8), false)
})