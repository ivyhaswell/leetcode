import { assert } from 'chai'
import { mergeTwoLists } from './solution'
import { create_list_by_vals, list_to_array } from '../utils/list-node'

describe('Basic Test', function () {
    function do_test(l1, l2, merged_list) {
        assert.deepEqual(
            list_to_array(mergeTwoLists(l1, l2)),
            list_to_array(merged_list),
        )
    }

    do_test(
        create_list_by_vals(1, 2, 4),
        create_list_by_vals(1, 3, 4),
        create_list_by_vals(1, 1, 2, 3, 4, 4),
    )

    do_test(
        create_list_by_vals(1, 2),
        create_list_by_vals(1, 3, 4),
        create_list_by_vals(1, 1, 2, 3, 4),
    )

})