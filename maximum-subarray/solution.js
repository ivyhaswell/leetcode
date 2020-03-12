/* https://leetcode-cn.com/problems/maximum-subarray/ */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    if (!nums.length) { return 0 }
    if (nums.length === 1) { return nums[0] }

    let i = 0

    let sum = 0
    let max = nums[i]

    /** 
     * 从左边开始累加求和，如果求和小于0，那么左边的丢弃掉肯定能获取更大的值，
     * 如果大于0，则和max做比较，如果大于max则更新 
     */
    while (i < nums.length) {
        if (sum < 0) {
            sum = nums[i]
        } else {
            sum += nums[i]
        }
        if (sum > max) {
            max = sum
        }
        i++
    }

    return max
};

export { maxSubArray }