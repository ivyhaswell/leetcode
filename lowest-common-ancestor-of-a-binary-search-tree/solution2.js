/* https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-search-tree/ */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 利用二叉搜索树的特性，父节点左边的子节点比它小，右边子节点比它大
 * 
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    let common_parent = null
    function find_node(root, p, q) {
        if ((root.val - p.val) * (root.val - q.val) <= 0) {
            return common_parent = root
        }
        if (root.left) {
            find_node(root.left, p, q)
        }
        if (root.right) {
            find_node(root.right, p, q)
        }
    }
    find_node(root, p, q)
    return common_parent
};

export { lowestCommonAncestor }