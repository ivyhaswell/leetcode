/* https://leetcode-cn.com/problems/sort-list/ */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
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

    /* 遍历遍历遍历，两两判断大小并交换，直到没有交换发生代表拍好了序，空间占用少，缺点是慢慢慢 */
    while (true) {
        let exchanged = false
        let prev = head
        let curr = head.next
        while (curr) {
            if (prev.val > curr.val) {
                swap_val(prev, curr)
                exchanged = true
            }
            prev = curr
            curr = curr.next
        }
        if (!exchanged) {
            break
        }
    }
    return head
};

export { sortList }