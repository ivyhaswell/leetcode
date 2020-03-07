/* https://leetcode-cn.com/problems/climbing-stairs/ */
/**
 * 高中数学的归纳法：
 * 假设上n级台阶的方法有S(n)种，最后一步有两种上法：
 * 上一级，则前面的可能性为S(n-1)
 * 上两级，则前面的可能性为S(n-2)
 * 因此S(n) = S(n-1) + S(n-2)
 * 
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (n <= 0) { return 0 }
    if (n === 1) { return 1 }
    if (n === 2) { return 2 }
    let p_prev = 1
    let prev = 2

    for (let i = 3; i <= n; i++) {
        let current = p_prev + prev
        p_prev = prev
        prev = current
    }

    return prev
};

export { climbStairs }