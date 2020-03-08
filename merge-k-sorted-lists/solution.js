import { ListNode } from "utils/list-node";

/* https://leetcode-cn.com/problems/merge-k-sorted-lists/ */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 将每个list当前的值逐一比较，取最小的放入数组，最后根据数组生成新链表，特别慢，因为对于长度
 * 为l，元素共有n个的列表来说，需要n次循环比较，每次比较l个元素，慢慢慢
 * 
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    if (lists.length === 0) { return null }
    if (lists.length === 1) { return lists[0] }

    let done = {}
    let arr = []

    lists.forEach((item, index) => {
        if (!item) { done[index] = true }
    })
    while (Object.keys(done).length < lists.length) {
        let min_index = 0
        for (let i = 0; i < lists.length; i++) {
            if (done[i]) { continue }
            if (!lists[min_index] || lists[i].val < lists[min_index].val) {
                min_index = i
            }
        }

        let val = lists[min_index].val
        while (lists[min_index] && lists[min_index].val === val) {
            arr.push(val)
            lists[min_index] = lists[min_index].next
        }

        if (!lists[min_index]) {
            done[min_index] = true
        }
    }

    let head_node = null
    let curr_node = null

    for (let i = 0; i < arr.length; i++) {
        let node = new ListNode(arr[i])
        if (!head_node) {
            head_node = node
            curr_node = node
        } else {
            curr_node.next = node
            curr_node = curr_node.next
        }
    }
    return head_node
};

export { mergeKLists }