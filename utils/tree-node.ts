/* 树节点 */
export function TreeNode<T>(val: T) {
    this.val = val
    this.left = this.right = null
    // return this
}

/* 根据数组创建树 */
export function create_tree_by_arr<T>(arr: T[]): TreeNode<T> {
    if (!arr.length) { throw "no items" }

    let root = new TreeNode(arr[0])
    let parents: TreeNode<T>[] = [root]
    let children: TreeNode<T>[] = []
    for (let i = 1; i < arr.length; i += 2) {
        let parent = parents.shift() as TreeNode<T>
        let left_node = arr[i] ? new TreeNode(arr[i]) : null
        let right_node = arr[i + 1] ? new TreeNode(arr[i + 1]) : null
        parent.left = left_node
        parent.right = right_node
        children.push(left_node, right_node)
        if (!parents.length) {
            parents = children
            children = []
        }
    }

    return root
}

/* 根据index获取node应该在树中的位置 */
export function get_node_position_by_index(index: number) {
    let sum = 0
    let depth = 1
    while (index > sum) {
        sum += Math.pow(2, depth)
    }
}