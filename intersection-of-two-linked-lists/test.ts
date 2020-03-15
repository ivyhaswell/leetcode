import { assert } from 'chai'
import { getIntersectionNode } from './solution'
import { create_list_by_vals, find_list_tail, find_nth_node_in_list } from 'utils/list-node'

describe('Basic Test', function () {
    let l1 = create_list_by_vals(4, 1, 8, 4, 5)
    let l2 = create_list_by_vals(5, 0, 1)

    let cross_node = find_nth_node_in_list(l1, 2)
    find_list_tail(l2).next = cross_node

    assert.equal(getIntersectionNode(l1, l2), cross_node)

    assert.equal(getIntersectionNode(null, null), null)
})  