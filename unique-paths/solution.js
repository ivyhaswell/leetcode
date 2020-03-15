/* https://leetcode-cn.com/problems/unique-paths/ */

/**
 * 其实可以看作排列组合题目，m x n的方格，最终要向右m-1次，向下n-1次
 * 那么对所有步骤做全排列就是 A(m-1 + n-1)(m-1 + n-1)，即 (m-1 + n-1)!
 * 而全排列中同样的步骤会被重复计算，m-1个步骤会被重复计算 A(m-1)(m-1)次，n-1个步骤会被重
 * 复计算A(n-1)(n-1)次，即(m-1)!和(n-1)!
 * 
 * 所以最后计算公式就是 (m-1 + n-1)! / ((m-1)! * (n-1)!)
 * 
 * 当然这个公式还可以继续化简，最终得到 ((m+n) * ... * (m+1)) / n!
 * 
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    function factorial(start, end) {
        let sum = 1
        for (let i = start; i <= end; i++) {
            sum *= i
        }
        return sum
    }

    /* m和n格各需要走m-1步和n-1步 */
    m--
    n--

    /* m<n则交换m和n，减少一点计算 */
    if (m < n) {
        let temp = m
        m = n
        n = temp
    }

    return factorial(m + 1, m + n) / factorial(1, n)
};

export { uniquePaths }