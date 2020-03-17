/* https://leetcode-cn.com/problems/linked-list-cycle-ii/ */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 记录遍历的每一个节点，匹配到就返回，简单粗暴，缺点是空间开销比较大
 * 
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    let map = new Map()
    let curr = head
    while (curr) {
        if (map.get(curr)) {
            return curr
        } else {
            map.set(curr, true)
        }
        curr = curr.next
    }
    return null
};

export { detectCycle }