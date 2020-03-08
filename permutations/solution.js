/* https://leetcode-cn.com/problems/permutations/ */
/**
 * 高中的排列组合知识，对n个元素，可能的排列的数量为A(n,n) = n*(n-1)*(n-2)*...*2*1
 * 虽然用递归解决了，但是这样写时间复杂度太高了...
 * 
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    if (nums.length < 2) { return [nums] }
    let result = []

    function perm(arr, ...items) {
        if (arr.length === 1) {
            result.push([...items, arr[0]])
            return
        }
        for (let i = 0; i < arr.length; i++) {
            let copy_arr = arr.concat([])
            let item = copy_arr.splice(i, 1)[0]
            perm(copy_arr, ...items, item)
        }
    }

    perm(nums)

    return result
};

export { permute }