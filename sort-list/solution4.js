import { ListNode } from "utils/list-node";

/* https://leetcode-cn.com/problems/sort-list/ */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 
 * [归并排序]
 * 分割链表，排序，然后合并。
 * 
 * 以 [4,8,6,2,7,1,3,5]为例:
 * 1. 分为 [4,8,6,2] 和 [7,1,3,5]
 * 2~3. [4,8,6,2]分为[4,8]和[6,2];[7,1,3,5]分为[7,1]和[3,5]
 * 4~7. 排序得到[4,8] [2,6] 和 [1,7] [3,5]
 * 8~9. 合并得到[2,4,6,8] 和 [1,3,5,7]
 * 10. 合并得到[1,2,3,4,5,6,7,8]
 * 
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
    if (!(head && head.next)) { return head }

    /* 合并两个有序链表 */
    function merge(l1, l2) {
        /* 创建一个空的node作为链表头，最后返回时返回这个node的next即可 */
        let null_head = new ListNode(0)
        let curr = null_head

        /* l1和l2都存在的时候，比较l1和l2来排序 */
        while (l1 && l2) {
            if (l1.val < l2.val) {
                curr.next = l1
                l1 = l1.next
            } else {
                curr.next = l2
                l2 = l2.next
            }
            curr = curr.next
        }

        /* l1和l2其中一个不存在，将剩下的node接上来就ok */
        if (l1) {
            curr.next = l1
        }
        if (l2) {
            curr.next = l2
        }

        return null_head.next
    }

    function sort(head) {
        if (!head.next) {
            return head
        }

        /** 
         * 分割链表，主要思路是从head开始取两个指针p1和p2，p1每次取p1.next，而p2每次取
         * p2.next.next，当p2到达末端，p1即指向中间节点，分割出去的链表的head。另外设置
         * pre指针，指向p1前一个节点，设置pre.next为null即可分割链表
         */
        let p1 = head
        let p2 = head
        let pre = null
        while (p2 && p2.next) {
            pre = p1
            p1 = p1.next
            p2 = p2.next.next
        }
        pre.next = null

        let l1 = sort(head)
        let l2 = sort(p1)
        return merge(l1, l2)
    }

    return sort(head)
};

export { sortList }