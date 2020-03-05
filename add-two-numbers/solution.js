/* https://leetcode-cn.com/problems/add-two-numbers/ */

function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    /* 进位的数字 */
    let extra = 0
    /* 返回的链表的第一位 */
    let firstNode = null
    /* 链表当前位置 */
    let currentNode = null
    /* 整体思路就是对每一位做加法，然后把加法得到的进位数字存起来下一次加法用上 */
    while (l1 || l2) {
        let l1_val = l1 && l1.val || 0
        let l2_val = l2 && l2.val || 0
        let sum = l1_val + l2_val + extra
        extra = Math.floor(sum / 10)
        let node = new ListNode(sum % 10)
        if (!firstNode) {
            firstNode = node
            currentNode = firstNode
        } else {
            currentNode.next = node
            currentNode = currentNode.next
        }
        l1 = l1 && l1.next
        l2 = l2 && l2.next
    }
    /* 如果最后一次l1和l2的加法有进位，需要在链表尾部再添加一位 */
    if (extra) {
        currentNode.next = new ListNode(extra)
    }
    return firstNode
};

export { ListNode, addTwoNumbers }