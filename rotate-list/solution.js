/* https://leetcode-cn.com/problems/rotate-list/ */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 1.遍历一次链表，获取链表长度len，通过k % len获得实际需要移动的步数
 * 2.将链表尾与链表头链接起来，向右移动k次其实等于向左移动len-k次，于是执行next操作len-k次，
 *   然后在这儿将链表断开，返回断开的链表头
 * 
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if (!(head && head.next)) { return head }

    let curr = head
    let len = 1
    while (curr.next) {
        len++
        curr = curr.next
    }
    k = k % len
    if (k === 0) { return head }

    curr.next = head

    for (let i = 0; i < len - k; i++) {
        curr = curr.next
    }
    let next = curr.next
    curr.next = null

    return next
};

export { rotateRight }