/* https://leetcode-cn.com/problems/min-stack/ */

import { DoubleLinkedListNode } from "utils/list-node";

/**
 * 通过双向链表实现，在pop, getMin, top方法的时间复杂度是常数，但push操作需要做遍历插入，
 * 没有达到常数时间
 */
var MinStack = function () {
    this.stack = []
    this.head = null
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    let node = new DoubleLinkedListNode(x)
    this.stack.push(node)

    if (!this.head) {
        this.head = node
    } else {
        let curr = this.head
        while (curr) {
            if (x <= curr.val) {
                let prev = curr.prev
                if (prev) {
                    prev.next = node
                    node.prev = prev
                } else {
                    this.head = node
                }
                node.next = curr
                curr.prev = node
                return
            }
            if (!curr.next) {
                curr.next = node
                node.prev = curr
                break
            }
            curr = curr.next
        }
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    let node = this.stack.pop()
    if (!node) { return null }
    let prev = node.prev
    let next = node.next
    if (prev && next) {
        prev.next = next
        next.prev = prev
    } else if (prev) {
        prev.next = null
    } else if (next) {
        next.prev = null
        this.head = next
    } else {
        this.head = null
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    let node = this.stack[this.stack.length - 1]
    return node ? node.val : null
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.head ? this.head.val : null
};

export { MinStack }