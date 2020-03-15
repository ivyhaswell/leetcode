/* https://leetcode-cn.com/problems/intersection-of-two-linked-lists/ */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    let p1 = headA
    let p2 = headB

    /** 
     * 双指针往后走，走到末尾再从另一个链表的头出发，如果有交点必然会同步走到，否则在最后都
     * 变成null结束循环
     */
    while (p1 !== p2) {
        p1 = p1 ? p1.next : headB
        p2 = p2 ? p2.next : headA
    }

    return p1
};

export { getIntersectionNode }