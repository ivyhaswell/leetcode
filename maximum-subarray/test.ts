import { assert } from 'chai'
import { maxSubArray } from './solution'

function run_test(solution) {
    assert.equal(
        solution([-2, 1, -3, 4, -1, 2, 1, -5, 4]),
        6,
    )
    assert.equal(
        solution([-2, 1, -3, 4, -1, 2, 1, -6, 5]),
        6,
    )
    assert.equal(
        solution([-2, -1]),
        -1,
    )
    assert.equal(
        solution([-2, 1]),
        1,
    )
    assert.equal(
        solution([-2, -3, -1]),
        -1
    )
}

describe('Basic Test', function () {
    run_test(maxSubArray)
})