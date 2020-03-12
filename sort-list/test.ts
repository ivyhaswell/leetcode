import { assert } from 'chai'
import { list_to_array, create_list_by_vals } from 'utils/list-node'
import { sortList } from './solution'
import { sortList as sortList2 } from './solution2'
import { sortList as sortList3 } from './solution3'
import { sortList as sortList4 } from './solution4'

function create_test_runner(solution: (list: ListNode<number>) => ListNode<number>) {
    return function (l1: ListNode<number>, l2: ListNode<number>) {
        assert.deepEqual(list_to_array(solution(l1)), list_to_array(l2))
    }
}

describe('Basic Test', function () {
    let tests: () => [ListNode<number>, ListNode<number>][] = () => [
        [
            create_list_by_vals(4, 2, 1, 3),
            create_list_by_vals(1, 2, 3, 4),
        ],
        [
            create_list_by_vals(-1, 5, 3, 4, 0),
            create_list_by_vals(-1, 0, 3, 4, 5),
        ]
    ]

    let solutions = [
        sortList,
        sortList2,
        sortList3,
        sortList4,
    ]

    let runners = solutions.map(create_test_runner)
    runners.forEach(runner => {
        let test_inst = tests()
        test_inst.forEach(test_case => {
            runner(...test_case)
        })
    })
})