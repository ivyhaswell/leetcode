/* https://leetcode-cn.com/problems/single-number/ */
/**
 * 利用异或运算的特点
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    return nums.reduce((prev, curr) => prev ^ curr, 0)
};

export { singleNumber }