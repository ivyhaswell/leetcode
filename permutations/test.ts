import { assert } from 'chai'
import { permute } from './solution'
import { permute as permute2 } from './solution2'

describe('Basic Test', function () {
    assert.deepEqual(
        permute([1, 2, 3]),
        [
            [1, 2, 3],
            [1, 3, 2],
            [2, 1, 3],
            [2, 3, 1],
            [3, 1, 2],
            [3, 2, 1]
        ],
    )
    assert.deepEqual(
        permute2([1, 2, 3]),
        [
            [1, 2, 3],
            [1, 3, 2],
            [2, 1, 3],
            [2, 3, 1],
            [3, 1, 2],
            [3, 2, 1]
        ],
    )
})