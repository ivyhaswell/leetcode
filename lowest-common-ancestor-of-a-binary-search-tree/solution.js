/* https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-search-tree/ */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 递归查找节点并在查找时记录路径，找到从根节点到两个节点的路径后，比较两条路径，找到最近公共
 * 祖先
 * 
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    function find_node_path() {
        let found = false
        return function find(root, node, path = []) {
            if (found || root == null) { return [] }
            path = path.slice(0)
            path.push(root)
            if (root === node) {
                found = true
                return path
            }
            return [].concat(
                find(root.left, node, path),
                find(root.right, node, path),
            )
        }
    }

    let p_path = find_node_path()(root, p)
    let q_path = find_node_path()(root, q)

    let common_node = null
    for (let i = 0; i < p_path.length; i++) {
        if (p_path[i] === q_path[i]) {
            common_node = p_path[i]
        } else {
            break
        }
    }

    return common_node
};

export { lowestCommonAncestor }