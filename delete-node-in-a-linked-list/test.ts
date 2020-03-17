import { assert } from 'chai'
import { deleteNode } from './solution'
import { create_list_by_vals, list_to_array } from 'utils/list-node'

describe('Basic Test', function () {
    let head1 = create_list_by_vals(4, 5, 1, 9)
    deleteNode(head1.next)
    assert.deepEqual(
        list_to_array(head1),
        [4, 1, 9]
    )

    let head2 = create_list_by_vals(4, 5, 1, 9)
    deleteNode((head2.next as ListNode<number>).next)
    assert.deepEqual(
        list_to_array(head2),
        [4, 5, 9]
    )

})