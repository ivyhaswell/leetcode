/* https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/ */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 递归
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    if (!root) { return 0 }
    let max_depth = 1
    function find(root, depth) {
        if (depth > max_depth) { max_depth = depth }
        if (root.left) {
            find(root.left, depth + 1)
        }
        if (root.right) {
            find(root.right, depth + 1)
        }
    }
    find(root, 1)

    return max_depth
};

export { maxDepth }