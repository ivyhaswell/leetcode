/* https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/ */
/**
 * 直接操作数组，遇到与前一个重复的就干掉，简单粗暴，但操作数组的步骤比较消耗性能
 * 注意splice之后不要i++，因为下一个元素会填充过来
 * 
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let i = 1
    while (i < nums.length) {
        if (nums[i] === nums[i - 1]) {
            nums.splice(i, 1)
        } else {
            i++
        }
    }

    return nums.length
};

export { removeDuplicates }
