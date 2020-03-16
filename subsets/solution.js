/* https://leetcode-cn.com/problems/subsets/ */
/**
 * 和之前一道求所有排列的题目有点像，还是通过递归输出
 * 其实求对有m个元素的集合求子集就是C(1, m) + C(2, m) + ... + C(m, m)
 * 
 * 
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let result = []
    result.push([])

    function find_subset(arr, pushing, count) {
        for (let i = 0; i < arr.length; i++) {
            let curr = pushing.slice(0)
            curr.push(arr[i])
            if (count === curr.length) {
                result.push(curr)
            } else {
                find_subset(arr.slice(i + 1), curr, count)
            }
        }
    }

    let len = nums.length
    for (let i = 1; i <= len; i++) {
        find_subset(nums, [], i)
    }

    return result
};

export { subsets }