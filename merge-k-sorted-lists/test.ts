import { assert } from 'chai'
import { list_to_array, create_list_by_vals } from 'utils/list-node'
import { mergeKLists } from './solution'
import { mergeKLists as mergeKLists2 } from './solution2'
import { mergeKLists as mergeKLists3 } from './solution3'
import { mergeKLists as mergeKLists4 } from './solution4'


function run_test(list: ListNode<number>, result: ListNode<number>) {
    assert.deepEqual(
        list_to_array(list),
        list_to_array(result)
    )
}

function solution_test(solution: (lists: ListNode<number>[]) => ListNode<number>) {
    run_test(
        solution([
            create_list_by_vals(1, 4, 5),
            create_list_by_vals(1, 3, 4),
            create_list_by_vals(2, 6),
        ]),
        create_list_by_vals(1, 1, 2, 3, 4, 4, 5, 6)
    )

    run_test(
        mergeKLists3([
            create_list_by_vals(0),
            create_list_by_vals(1),
        ]),
        create_list_by_vals(0, 1)
    )

    assert.deepEqual(
        mergeKLists([null, null]),
        null
    )
}

describe('Basic Test solution1', function () {
    solution_test(mergeKLists)
})


describe('Basic Test solution2', function () {
    solution_test(mergeKLists2)
})


describe('Basic Test solution3', function () {
    solution_test(mergeKLists3)
})

describe('Basic Test solution4', function () {
    solution_test(mergeKLists4)
})