/* https://leetcode-cn.com/problems/majority-element/ */
/**
 * 设置一个对象存储出现次数，出现次数超过一半后直接returns
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let counts = {}
    let limit = Math.ceil(nums.length / 2)
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        let count = counts[element] || 0
        count++
        if (count >= limit) {
            return element
        }
        counts[element] = count
    }
};

export { majorityElement }