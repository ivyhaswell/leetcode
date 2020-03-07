import { assert } from 'chai'
import { spiralOrder } from './solution'

describe('Basic Test', function () {
    assert.deepEqual(
        spiralOrder([
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
        ]),
        [1, 2, 3, 6, 9, 8, 7, 4, 5],
    )

    assert.deepEqual(
        spiralOrder([
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12]
        ]),
        [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]
    )
})