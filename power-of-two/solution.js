/* https://leetcode-cn.com/problems/power-of-two/ */
/**
 * 以2为底的对数结果为整数就ok
 * 或者累乘做比较
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
    // let compare = Math.pow(2, 0)
    // while (compare <= n) {
    //     if (n === compare) { return true }
    //     compare *= 2
    // }
    // return false
    return Math.log2(n) % 1 === 0
};

export { isPowerOfTwo }