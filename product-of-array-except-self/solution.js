/* https://leetcode-cn.com/problems/product-of-array-except-self/ */
/**
 * 算出所有非零数的乘积，然后含0情况根据情况做除法
 * 
 * 最需要注意的区分是包含一个0、多个0和没有0的情况
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    if (nums.length < 2) { return nums }

    let zero_count = 0
    let product = nums.reduce((prev, curr) => {
        if (curr === 0) {
            zero_count++
            return prev
        } else {
            return curr * prev
        }
    }, 1)

    if (zero_count > 1) {
        return Array(nums.length).fill(0)
    }

    if (zero_count === 1) {
        return Array(nums.length).fill(0).map((num, index) => {
            return nums[index] === 0 ? product : num
        })
    }

    return Array(nums.length).fill(product).map((item, index) => item / nums[index])
};

export { productExceptSelf }