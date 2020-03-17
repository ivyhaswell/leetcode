import { assert } from 'chai'
import { create_cycle_list } from 'utils/list-node'
import { detectCycle } from './solution'
import { detectCycle as detectCycle2 } from './solution2'

function run_test(solution: (head: ListNode<number>) => ListNode<number>) {
    let head1 = create_cycle_list([3, 2, 0, 4], 1)
    assert.equal(solution(head1), head1.next)

    let head2 = create_cycle_list([1, 2], 0)
    assert.equal(solution(head2), head2)

    let head3 = create_cycle_list([1], -1)
    assert.equal(solution(head3), null)
}

describe('Basic Test', function () {
    run_test(detectCycle)
    run_test(detectCycle2)
})