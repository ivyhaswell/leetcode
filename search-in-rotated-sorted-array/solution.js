/* https://leetcode-cn.com/problems/search-in-rotated-sorted-array/ */
/**
 * 二分查找，只是判断比普通的二分稍微麻烦一点
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    if (!nums.length) { return -1 }

    let low = 0
    let high = nums.length - 1

    while (low <= high) {
        if (low === high) {
            return nums[low] === target ? low : -1
        }
        let middle = Math.floor((low + high) / 2)
        if (nums[low] < nums[high]) {
            if (nums[middle] < target) {
                low = middle + 1
            } else {
                high = middle
            }
            continue
        } else {
            if (target >= nums[low]) {
                if (target > nums[middle] && nums[middle] >= nums[low]) {
                    low = middle + 1
                } else {
                    high = middle
                }
                continue
            } else if (target <= nums[high]) {
                if (target < nums[middle + 1] && nums[middle + 1] <= nums[high]) {
                    high = middle
                } else {
                    low = middle + 1
                }
                continue
            } else {
                return -1
            }
        }
    }
};

export { search }