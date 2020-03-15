/* https://leetcode-cn.com/problems/min-stack/ */

/**
 * 通过一个排序的数组维护最小栈，geMin方法的时间复杂度是常数，但push和pop不是
 */
var MinStack = function () {
    this.stack = []
    this.min_stack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    this.stack.push(x)
    for (let i = 0; i < this.min_stack.length; i++) {
        if (x < this.min_stack[i]) {
            this.min_stack.splice(i, 0, x)
            return
        }
    }
    this.min_stack.push(x)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    if (!this.stack[0]) { return null }
    let x = this.stack.pop()
    for (let i = 0; i < this.min_stack.length; i++) {
        if (x === this.min_stack[i]) {
            this.min_stack.splice(i, 1)
            return
        }
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.min_stack[0]
};

export { MinStack }