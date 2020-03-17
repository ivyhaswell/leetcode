/* https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/ */
/**
 * 类似的套路，遍历然后计算当前元素与前一元素的差值，如果差值大于0，继续累计，否则将本次累计
 * 的金额添加到总金额，遍历完成后将最后的累计值再次加到总金额并返回
 * 
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    if (prices.length < 2) { return 0 }

    let max_profit = 0
    let sum = 0
    for (let i = 1; i < prices.length; i++) {
        let diff = prices[i] - prices[i - 1]
        if (diff > 0) {
            sum += diff
        } else {
            max_profit += sum
            sum = 0
        }
    }
    max_profit += sum

    return max_profit
};

export { maxProfit }