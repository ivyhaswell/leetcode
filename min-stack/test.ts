import { assert } from 'chai'
import { MinStack } from './solution'
import { MinStack as MinStack2 } from './solution2'

describe('solution 1', function () {
    let min_stack = new MinStack()
    min_stack.push(-2)
    min_stack.push(0)
    min_stack.push(-3)
    assert.equal(min_stack.getMin(), -3)
    min_stack.pop()
    assert.equal(min_stack.getMin(), -2)
    assert.equal(min_stack.top(), 0)
    assert.equal(min_stack.getMin(), -2)
})

describe('solution 2', function () {
    let min_stack = new MinStack2()
    min_stack.push(-2)
    min_stack.push(0)
    min_stack.push(-3)
    assert.equal(min_stack.getMin(), -3)
    min_stack.pop()
    assert.equal(min_stack.getMin(), -2)
    assert.equal(min_stack.top(), 0)
    assert.equal(min_stack.getMin(), -2)
})

describe('solution 3', function () {
    let min_stack = new MinStack2()
    min_stack.push(-2)
    min_stack.push(0)
    min_stack.push(-1)
    assert.equal(min_stack.getMin(), -2)
    assert.equal(min_stack.top(), -1)
    min_stack.pop()
    assert.equal(min_stack.getMin(), -2)
})