/* https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/ */
/**
 * 使用双索引，i一直向后遍历整个数组，每次遍历和j做对比，如果相同则不进行操作，不同则将j+1，
 * 并把第i个元素的值赋给j
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let i = 1
    let j = 0
    while (i < nums.length) {
        if (nums[i] !== nums[j]) {
            j++
            nums[j] = nums[i]
        }
        i++
    }

    return ++j
};

export { removeDuplicates }
