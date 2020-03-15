import { assert } from 'chai'
import { maxDepth } from './solution'
import { create_tree_by_arr } from 'utils/tree-node'

describe('Basic Test', function () {
    let tree = create_tree_by_arr([3, 9, 20, null, null, 15, 7])
    assert.equal(maxDepth(tree), 3)
})