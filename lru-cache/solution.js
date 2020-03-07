/**
 * 用数组维护一个key的列表，然后用一个对象维护key-val值数据，每次
 * 存取数据的时候就更新一次key在数组中的顺序。
 * 实现是ok了，但是时间复杂度达不到，于是又写了一个solution2
 */

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.max = capacity
    this.cache = {}
    this.keys = []
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    let value = this.cache[key]
    if (value === undefined) {
        return -1
    }
    this.update_position(key)
    return value
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    if (this.cache[key] !== undefined) {
        this.cache[key] = value
        this.update_position(key)
    } else {
        this.cache[key] = value
        this.keys.push(key)
        if (this.keys.length > this.max) {
            delete this.cache[this.keys[0]]
            this.keys.shift()
        }
    }
};

/**
 * 更新key的位置
 * @param {number} key
 */
LRUCache.prototype.update_position = function (key) {
    let index = this.keys.findIndex(i => i === key)
    if (index !== -1) {
        let items = this.keys.splice(index, 1)
        this.keys.push(items[0])
        return
    }
    this.keys.push(key)
}

export { LRUCache }