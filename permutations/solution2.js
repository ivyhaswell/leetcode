/* https://leetcode-cn.com/problems/permutations/ */
/**
 * 相比于solution1，把复制数组的操作改为了存储对应在nums中的index，如果是复杂类型的数据空
 * 间开销会小一点，复制数组，做splice等操作也去掉了，预先分配了数组空间。尽管在leetcode上
 * 执行时间变少了，但都只是小优化，时间复杂度还是没有明显的变化，
 * 
 * 理想的方法应该是找到一个映射关系，可以直接在 n! * n次循环中把i,j映射到的res[i][j]
 * 
 * @todo 寻找时间复杂度更低的方法
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    if (nums.length < 2) { return [nums] }
    let len = nums.length
    /* 计算n的阶乘 */
    function factorial(n) {
        let res = 1
        while (n > 1) {
            res *= n
            n--
        }
        return res
    }
    let result = Array(factorial(len)).fill(0).map(i => Array(len))
    let result_index = 0
    function perm(...indexes) {
        if (indexes.length === len) {
            for (let i = 0; i < len; i++) {
                result[result_index][i] = nums[indexes[i]]
            }
            result_index++
            return
        }
        for (let i = 0; i < len; i++) {
            if (!indexes.includes(i)) {
                perm(...indexes, i)
            }
        }
    }

    perm()

    return result
};

export { permute }