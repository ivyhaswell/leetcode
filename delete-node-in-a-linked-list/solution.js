/* https://leetcode-cn.com/problems/delete-node-in-a-linked-list/ */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 很简单就是俩指针，前面一个跟着后面一个改值，到最末尾把尾节点干掉就完事儿
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {
    let prev = null
    let curr = node
    while (curr.next) {
        prev = curr
        curr = curr.next
        prev.val = curr.val
    }
    prev.next = null
};

export { deleteNode }