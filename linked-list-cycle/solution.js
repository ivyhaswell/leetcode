/* https://leetcode-cn.com/problems/linked-list-cycle/ */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    let m = new Map()
    while (head) {
        if (m.has(head)) {
            return true
        } else {
            m.set(head, true)
        }
        head = head.next
    }
    return false
};

export { hasCycle }
