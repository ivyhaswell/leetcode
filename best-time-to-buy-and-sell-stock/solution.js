/* https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/ */
/**
 * 依然是贪心法，和之前一道求最大子数组和的题目几乎一样
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    if (prices.length < 2) { return 0 }

    let sum = 0
    let profit = 0
    for (let i = 0; i < prices.length - 1; i++) {
        let diff = prices[i + 1] - prices[i]
        sum += diff
        if (sum < 0) { sum = 0 }
        profit = Math.max(sum, profit)
    }

    return Math.max(profit, 0)
};

export { maxProfit }