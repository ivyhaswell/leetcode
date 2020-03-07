import { assert } from 'chai'
import { merge } from './solution'

describe('Basic Test', function () {
    function run_test(nums1: number[], m: number, nums2: number[], n: number, arr: number[]) {
        merge(nums1, m, nums2, n)
        assert.deepEqual(nums1, arr)
    }

    run_test(
        [1, 2, 3, 0, 0, 0],
        3,
        [2, 5, 6],
        3,
        [1, 2, 2, 3, 5, 6]
    )

    run_test(
        [4, 0, 0, 0, 0, 0],
        1,
        [1, 2, 3, 5, 6],
        5,
        [1, 2, 3, 4, 5, 6],
    )


})