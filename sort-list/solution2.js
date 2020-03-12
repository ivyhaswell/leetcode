/* https://leetcode-cn.com/problems/sort-list/ */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 选择排序，先找最小的，放到首位，然后找第二小的，放到第二位.......
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
    if (!(head && head.next)) { return head }

    /* 交换值 */
    function swap_val(node1, node2) {
        let val = node1.val
        node1.val = node2.val
        node2.val = val
    }

    let pointer = head
    while (pointer.next) {
        let curr = pointer.next
        let min_val = pointer.val
        let min_node = pointer
        while (curr) {
            if (curr.val < min_val) {
                min_node = curr
                min_val = min_node.val
            }
            curr = curr.next
        }
        if (min_node !== pointer) {
            swap_val(min_node, pointer)
        }
        pointer = pointer.next
    }

    return head
};

export { sortList }