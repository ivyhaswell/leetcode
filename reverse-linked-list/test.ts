import { assert } from 'chai'
import { reverseList } from './solution'
import { create_list_by_vals, list_to_array } from '../utils/list-node'

describe('Basic Test', function () {
    function run_test(l1, l2) {
        assert.deepEqual(list_to_array(l1), list_to_array(l2))
    }

    run_test(
        reverseList(create_list_by_vals(1, 2, 3, 4, 5)),
        create_list_by_vals(5, 4, 3, 2, 1)
    )
})
