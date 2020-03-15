import { assert } from 'chai'
import { hasCycle } from './solution'
import { create_cycle_list } from 'utils/list-node'


describe('Basic Test', function () {
    let head1 = create_cycle_list([3, 2, 0, 4], 1)
    assert.equal(hasCycle(head1), true)

    let head2 = create_cycle_list([1, 2], 0)
    assert.equal(hasCycle(head2), true)

    let head3 = create_cycle_list([1], -1)
    assert.equal(hasCycle(head3), false)
})