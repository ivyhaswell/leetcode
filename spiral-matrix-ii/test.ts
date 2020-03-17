import { assert } from 'chai'
import { generateMatrix } from './solution'

describe('Basic Test', function () {
    assert.deepEqual(
        generateMatrix(0),
        [],
    )

    assert.deepEqual(
        generateMatrix(1),
        [
            [1]
        ],
    )

    assert.deepEqual(
        generateMatrix(3),
        [
            [1, 2, 3],
            [8, 9, 4],
            [7, 6, 5],
        ],
    )
})