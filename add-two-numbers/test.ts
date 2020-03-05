import { ListNode, addTwoNumbers } from './solution'
import { assert } from 'chai'

/**
 * 根据不定数量的number类型参数创建一个链表
 *
 * @param {...number[]} args
 * @returns {ListNode}
 */
function createListNode(...args: number[]) {
    let listNode: ListNode | null = null
    let current: ListNode | null = null
    for (let i = 0; i < args.length; i++) {
        let node = new ListNode(args[i])
        if (!current) {
            listNode = node
            current = node
        } else {
            current.next = node
            current = current.next
        }
    }
    return listNode as ListNode
}

/**
 * 将链表转换为数组便于比较
 *
 * @param {ListNode} listNode
 * @returns {number[]}
 */
function nodeToArray(listNode: ListNode): number[] {
    let arr: number[] = []
    let node = listNode
    while (node) {
        arr.push(node.val)
        node = node.next
    }
    return arr
}

/**
 * 比较给定的两个链表的值是否相等
 *
 * @param {ListNode} l1
 * @param {ListNode} l2
 */
function runTest(l1: ListNode, l2: ListNode) {
    assert.deepEqual(nodeToArray(l1), nodeToArray(l2))
}

describe('Add Two Numbers', function () {
    runTest(
        addTwoNumbers(createListNode(2, 4, 3), createListNode(5, 6, 4)),
        createListNode(7, 0, 8),
    )
    runTest(addTwoNumbers(createListNode(1), createListNode(9, 9)), createListNode(0, 0, 1))
})