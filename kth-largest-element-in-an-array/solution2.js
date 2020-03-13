/* https://leetcode-cn.com/problems/kth-largest-element-in-an-array/ */
/**
 * 选择排序，先找到最大的元素，与数组中第一个元素交换；然后在剩余数组中找到最大的元素，与数组
 * 中第二个元素交换...直到k
 * 因为这里只需要排k个元素，相比于其他的排序算法，选择排序不需要将数组全排列完，可能在某些情
 * 况时间消耗更少
 * 
 * 不过在leetcode的提交运行发现，还是比归并排序慢了很多...但是空间开销比较低
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {

    function swap(arr, index1, index2) {
        let temp = arr[index1]
        arr[index1] = arr[index2]
        arr[index2] = temp
    }

    for (let i = 0; i < k; i++) {
        let max_index = i
        for (let j = i; j < nums.length; j++) {
            if (nums[j] > nums[max_index]) {
                max_index = j
            }
        }
        swap(nums, max_index, i)
    }

    return nums[k - 1]
};

export { findKthLargest }