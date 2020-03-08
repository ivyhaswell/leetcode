/* https://leetcode-cn.com/problems/merge-k-sorted-lists/ */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 这个解法其实是solution1的一个小优化，本质上还是一样的遍历的思路，只是没有了链表转数组再转
 * 链表的开销，直接判断位置后插入链表的节点。
 * 和solution1还有一点不同，这里是一个一个链表顺序比较并插入节点，而solution1是一次比较n个
 * 只插入一个，太浪费资源了，也难怪在leetcode上判题运行时间那么久
 *  
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    if (lists.length === 0) { return null }
    if (lists.length === 1) { return lists[0] }

    let head = null
    let curr = null

    for (let i = 0; i < lists.length; i++) {
        if (!lists[i]) { continue }
        let node = lists[i]
        if (!head) {
            head = node
            continue
        }
        while (node) {
            if (node.val < head.val) {
                let next = node.next
                node.next = head
                head = node
                node = next
                continue
            }
            curr = head
            while (curr.next) {
                if (node.val < curr.next.val) {
                    let next = curr.next
                    let node_next = node.next
                    curr.next = node
                    node.next = next
                    node = node_next
                    break
                }
                curr = curr.next
            }
            if (!curr.next) {
                let next = node.next
                curr.next = node
                node = next
                break
            }
        }
        curr = head
    }

    return head
};

export { mergeKLists }