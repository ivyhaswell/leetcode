import { assert } from 'chai'
import { rotateRight } from './solution'
import { create_list_by_vals, list_to_array } from 'utils/list-node'

describe('Basic Test', function () {
    let head1 = create_list_by_vals(1, 2, 3, 4, 5)
    assert.deepEqual(
        list_to_array(rotateRight(head1, 2)),
        [4, 5, 1, 2, 3],
    )

    let head2 = create_list_by_vals(0, 1, 2)
    assert.deepEqual(
        list_to_array(rotateRight(head2, 4)),
        [2, 0, 1],
    )

    let head3 = create_list_by_vals(1, 2)
    assert.deepEqual(
        list_to_array(rotateRight(head3, 0)),
        [1, 2],
    )

    assert.equal(rotateRight(null, 0), null)
})