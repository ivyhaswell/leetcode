/* https://leetcode-cn.com/problems/3sum/ */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let result_arr = []
    /* 先排序 */
    let nums_sorted = nums.sort((a, b) => a - b)
    let len = nums_sorted.length

    /* 对排好序的数组做遍历，对数组元素i，设指针j和k分别从两边向中间查找 */
    for (let i = 0; i < len - 2; i++) {
        /* 如果三数之和已经大于0，后续不需要查找了 */
        if (nums_sorted[i] + nums_sorted[i + 1] + nums_sorted[i + 2] > 0) { break }
        /* 如果当前元素和前一个元素相同，不需要做重复匹配 */
        if (nums_sorted[i] === nums_sorted[i - 1]) { continue }

        /* 需要查找的相加值 */
        let target = -nums_sorted[i]
        /* 左指针 */
        let j = i + 1
        /* 右指针 */
        let k = len - 1

        while (j < k) {
            /* 如果当前j和前一个j相同，且前一个j不是i，不需要做重复匹配 */
            if (j !== i + 1 && nums_sorted[j] === nums_sorted[j - 1]) {
                j++
                continue
            }
            /* 如果当前k和前一个k相同，不需要做重复匹配 */
            if (nums_sorted[k] === nums_sorted[k + 1]) {
                k--
                continue
            }
            if (nums_sorted[j] + nums_sorted[k] === target) {
                result_arr.push([nums_sorted[i], nums_sorted[j], nums_sorted[k]])
                j++
                k--
            } else if (nums_sorted[j] + nums_sorted[k] < target) {
                /* 如果相加值小于所需值，左指针+1 */
                j++
            } else {
                /* 否则右指针-1 */
                k--
            }
        }
    }
    return result_arr
};

export { threeSum }