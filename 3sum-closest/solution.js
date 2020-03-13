/* https://leetcode-cn.com/problems/3sum-closest/ */
/**
 * 和前面的一个题目类似，主要思路还是先排序，然后前后双指针遍历
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    if (nums.length === 3) {
        return nums.reduce((a, b) => a + b, 0)
    }

    /* 先排序 */
    nums.sort((a, b) => a - b)

    let closest = target - (nums[0] + nums[1] + nums[2])

    for (let i = 0; i < nums.length - 2; i++) {
        let p = i + 1
        let q = nums.length - 1

        while (p < q) {
            let val = target - nums[i] - nums[p] - nums[q]
            if (Math.abs(val) < Math.abs(closest)) {
                closest = val
            }
            if (val > 0) {
                p++
            } else {
                q--
            }
        }

        /* 已经不可能更小了 */
        if (closest === 0) {
            break
        }
        /* 再往后也不会更小了 */
        if (nums[i] + nums[i + 1] + nums[i + 2] > target) {
            break
        }
    }

    return target - closest
};

export { threeSumClosest }