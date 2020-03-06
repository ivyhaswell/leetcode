/* https://leetcode-cn.com/problems/reverse-linked-list/ */
import { ListNode } from 'utils/list-node'
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
var reverseList = function (head) {
    let tail = null
    while (head !== null) {
        let node = new ListNode(head.val)
        node.next = tail
        tail = node
        head = head.next
    }
    return tail
};

export { reverseList }