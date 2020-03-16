import { assert } from 'chai'
import { create_tree_by_arr } from 'utils/tree-node'
import { lowestCommonAncestor } from './solution'
import { lowestCommonAncestor as lowestCommonAncestor2 } from './solution2'

describe('Basic Test', function () {
    let tree = create_tree_by_arr([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5])
    assert.equal(lowestCommonAncestor(tree, tree.left, tree.right), tree)
    assert.equal(lowestCommonAncestor(tree, tree.left, tree.left.right), tree.left)

    assert.equal(lowestCommonAncestor2(tree, tree.left, tree.right), tree)
    assert.equal(lowestCommonAncestor2(tree, tree.left, tree.left.right), tree.left)
})