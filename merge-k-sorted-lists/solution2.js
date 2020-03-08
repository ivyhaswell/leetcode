/* https://leetcode-cn.com/problems/merge-k-sorted-lists/ */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 思路为链表两两合并，直到合并成一条，这样就不需要每次比较n个元素了，也不用做转换成数组或者
 * 新建链表的操作。
 * 
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    if (lists.length === 0) { return null }
    if (lists.length === 1) { return lists[0] }

    function merge_2_list(l1, l2) {
        if (!l1) { return l2 }
        if (!l2) { return l1 }

        let head
        let curr
        if (l1.val < l2.val) {
            head = l1
            l1 = l1.next
        } else {
            head = l2
            l2 = l2.next
        }
        curr = head

        while (l1 || l2) {
            if (!l1) {
                curr.next = l2
                break
            }
            if (!l2) {
                curr.next = l1
                break
            }
            if (l1.val < l2.val) {
                curr.next = l1
                curr = curr.next
                l1 = l1.next
            } else {
                curr.next = l2
                curr = curr.next
                l2 = l2.next
            }
        }

        return head
    }

    return lists.reduce(merge_2_list, null)
};

export { mergeKLists }