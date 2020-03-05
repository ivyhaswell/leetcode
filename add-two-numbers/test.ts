import { assert } from 'chai'
import { addTwoNumbers } from './solution'
import { create_list_by_vals, list_to_array } from '../utils/list-node'


describe('Add Two Numbers', function () {
    function runTest(l1: ListNode<number>, l2: ListNode<number>) {
        assert.deepEqual(list_to_array(l1), list_to_array(l2))
    }
    runTest(
        addTwoNumbers(create_list_by_vals(2, 4, 3), create_list_by_vals(5, 6, 4)),
        create_list_by_vals(7, 0, 8) as ListNode<number>,
    )
    runTest(
        addTwoNumbers(create_list_by_vals(1), create_list_by_vals(9, 9)),
        create_list_by_vals(0, 0, 1) as ListNode<number>
    )
})