/* https://leetcode-cn.com/problems/sort-list/ */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 取巧的办法，转换数组后利用数组的sort方法，但这样空间复杂度变高了
 * 
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
    if (!(head && head.next)) { return head }

    let arr = []
    let curr = head
    while (curr) {
        arr.push(curr.val)
        curr = curr.next
    }
    arr.sort((a, b) => a - b)
    let index = 0
    let node = head
    while (index < arr.length) {
        node.val = arr[index]
        node = node.next
        index++
    }

    return head
};

export { sortList }