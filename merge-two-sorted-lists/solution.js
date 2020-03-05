import { ListNode } from "../utils/list-node";

/* https://leetcode-cn.com/problems/merge-two-sorted-lists/ */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode|null} l1
 * @param {ListNode|null} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    if (!l1) { return l2 }
    if (!l2) { return l1 }

    let node_list = null
    let first_node = null

    while (l1 || l2) {
        if (!l2) {
            node_list.next = l1
            break
        }
        if (!l1) {
            node_list.next = l2
            break
        }
        let val
        if (l1.val < l2.val) {
            val = l1.val
            l1 = l1.next
        } else {
            val = l2.val
            l2 = l2.next
        }
        let node = new ListNode(val)
        if (!first_node) {
            first_node = node
            node_list = first_node
        } else {
            node_list.next = node
            node_list = node_list.next
        }
    }
    return first_node
};

export { mergeTwoLists }