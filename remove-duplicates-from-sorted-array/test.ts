import { assert } from 'chai'
import { removeDuplicates } from './solution'
import { removeDuplicates as removeDuplicates2 } from './solution'

function run_test(solution) {
    let arr1 = [1, 1, 2]
    let arr2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
    let arr3 = [1]

    solution(arr1)
    solution(arr2)
    solution(arr3)

    assert.deepEqual(arr1, [1, 2])
    assert.deepEqual(arr2, [0, 1, 2, 3, 4])
    assert.deepEqual(arr3, [1])
}

describe('Basic Test', function () {
    run_test(removeDuplicates)
    run_test(removeDuplicates2)
})