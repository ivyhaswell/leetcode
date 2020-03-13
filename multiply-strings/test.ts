import { assert } from 'chai'
import { multiply } from './solution'

describe('Basic Test', function () {
    assert.equal(multiply('2', '3'), '6')
    assert.equal(multiply('123', '456'), '56088')
    assert.equal(multiply('123456789', '987654321'), "121932631112635269")
})