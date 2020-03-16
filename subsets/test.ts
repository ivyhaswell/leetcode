import { assert } from 'chai'
import { subsets } from './solution'

describe('Basic Test', function () {
    assert.deepEqual(
        subsets([1, 2, 3]),
        [
            [],
            [1],
            [2],
            [3],
            [1, 2],
            [1, 3],
            [2, 3],
            [1, 2, 3],
        ]
    )
})