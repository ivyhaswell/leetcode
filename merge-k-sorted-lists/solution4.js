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
 * 这个方法比较讨巧，先把所有值塞进数组，然后用sort方法对数组进行排序，最后根据排好序的数组
 * 生成链表，但是执行速度还不错，可能和数组类型是number类型有关系:
 * 
 * https://stackoverflow.com/questions/234683/javascript-array-sort-implementation
 * https://github.com/adobe/webkit/blob/master/Source/JavaScriptCore/runtime/JSArray.cpp#L971
 * https://github.com/adobe/webkit/blob/master/Source/JavaScriptCore/runtime/ArrayPrototype.cpp#L647
 *  
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    if (lists.length === 0) { return null }
    if (lists.length === 1) { return lists[0] }

    let arr = []
    for (let i = 0; i < lists.length; i++) {
        let node = lists[i]
        if (!node) { continue }
        while (node) {
            arr.push(node.val)
            node = node.next
        }
    }

    arr.sort((a, b) => a - b)

    let head = null
    let curr = null
    for (let i = 0; i < arr.length; i++) {
        let node = new ListNode(arr[i])
        if (!head) {
            head = node
            curr = head
            continue
        }
        curr.next = node
        curr = curr.next
    }

    return head
};

export { mergeKLists }