/**
 * 换一个思路，和solution1相反，对象用来存储key，指向对应的数据对象。为了维护长度和进出顺序，
 * 数据对象都封装成了一个个双向链表的节点，互相连接起来。
 * 
 * 大概相当于这样：
 *                         cache
 *                       .   ..    .
 *                     .    .  .     .
 *                   .     .    .      .
 *                 .      .      .       .
 *               .       .        .        .
 * list         1   ⇌   2    ⇌    3    ⇌   4    
 * 
 * 在这个solution里面没有完整的将双向链表的各种方法封装出来，只封装了这个问题需要的；
 * 1. 添加
 * 2. 移位
 * 3. 移除
 */

/* 双向链表的节点 */
function DoubleLinkedListNode(key, value) {
    return {
        key,
        value,
        prev: null,
        next: null,
    }
}

const __head = Symbol('head')
const __tail = Symbol('tail')
const __length = Symbol('length')

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.capacity = capacity
    this.cache = {
        [__head]: null,
        [__tail]: null,
        [__length]: 0,
    }
};

/** 
 * 取值，如果有这个key，将其移动到头部
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    let node = this.cache[key]
    if (node === undefined) {
        return -1
    }
    this.move_to_head(node)
    return node.value
};

/**
 * 存值，更新/添加一个值，并移动到头部 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    let node = this.cache[key]
    if (node) {
        node.value = value
        this.move_to_head(node)
    } else {
        node = DoubleLinkedListNode(key, value)
        this.unshift(node)
        if (this.cache[__length] > this.capacity) {
            this.remove_tail()
        }
    }

};

/* 移动一个节点到头部 */
LRUCache.prototype.move_to_head = function (node) {
    if (this.cache[__head] === node) {
        return
    }
    if (this.cache[__tail] === node) {
        let prev_node = node.prev
        prev_node.next = null
        this.cache[__tail] = prev_node
    } else {
        let prev_node = node.prev
        let next_node = node.next
        prev_node.next = next_node
        next_node.prev = prev_node
    }
    let head_node = this.cache[__head]
    head_node.prev = node
    node.next = head_node
    node.prev = null
    this.cache[__head] = node
}

/* 在头部添加一个节点 */
LRUCache.prototype.unshift = function (node) {
    if (this.cache[__length] === 0) {
        node.prev = null
        node.next = null
        this.cache[__head] = node
        this.cache[__tail] = node
    } else {
        let head_node = this.cache[__head]
        node.prev = null
        node.next = head_node
        head_node.prev = node
        this.cache[__head] = node
    }
    this.cache[__length] = this.cache[__length] + 1
    this.cache[node.key] = node
}

/* 移除尾部的一个节点 */
LRUCache.prototype.remove_tail = function () {
    let tail_node = this.cache[__tail]
    if (!tail_node) { return }

    let prev_node = tail_node.prev
    if (prev_node) {
        prev_node.next = null
        this.cache[__tail] = prev_node
    } else {
        this.cache[__tail] = null
    }
    delete this.cache[tail_node.key]
    this.cache[__length] = this.cache[__length] - 1
}

export { LRUCache }