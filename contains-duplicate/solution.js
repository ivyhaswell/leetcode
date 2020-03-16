/* https://leetcode-cn.com/problems/contains-duplicate/ */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    let map = {}
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in map) {
            return true
        } else {
            map[nums[i]] = 1
        }
    }
    return false
};

export { containsDuplicate }