/* https://leetcode-cn.com/problems/linked-list-cycle-ii/ */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 选用仨指针p1,p2,p3
 * 1. p1每次走一格，p2每次走两格，如果有循环最终会相遇
 * 2. 如果p1和p2相遇了，p3开始走，p1也继续走，走到p1和p3相遇就是进入循环的节点
 * 
 * 为什么？直接画图说明
 *  
 *  |------ dist1 ------|------------ dist2 ------------|------ dist3 ------|
 * head            node1(入环节点)             node2(p1和p2相遇节点)      tail
 * 
 * (式一) 2 * (dist1 + dist2) = dist1 + dist2 * 2 + dist3
 * 化简得到：
 * (式二) dist1 = dist3
 * 因此在相遇之后只要p3和p1同步走，就能同时到达入环点
 * 
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    if (!(head && head.next)) { return null }
    if (head.next.next === head) { return head }

    let p1 = head
    let p2 = head
    let p3 = head

    while (p1 && p2 && p2.next) {
        p1 = p1.next
        p2 = p2.next.next
        if (p1 === p2) {
            while (p3 && p1) {
                p3 = p3.next
                p1 = p1.next
                if (p3 === p1) {
                    return p3
                }
            }
            break
        }
    }

    return null
};

export { detectCycle }