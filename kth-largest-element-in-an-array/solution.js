/* https://leetcode-cn.com/problems/kth-largest-element-in-an-array/ */
/**
 * 还是归并排序，在合并过程中做了一些优化，合并数组长度在达到k之后不在进行后续的判断
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

    function merge(arr1, arr2, k) {
        let arr = []
        let p1 = 0
        let p2 = 0
        while (p1 < arr1.length || p2 < arr2.length) {
            if (p1 === arr1.length) {
                arr.push(arr2[p2])
                p2++
            } else if (p2 === arr2.length) {
                arr.push(arr1[p1])
                p1++
            } else if (arr1[p1] > arr2[p2]) {
                arr.push(arr1[p1])
                p1++
            } else {
                arr.push(arr2[p2])
                p2++
            }
            if (arr.length === k) {
                return arr
            }
        }
        return arr
    }

    function sort(arr, k) {
        if (arr.length === 1) {
            return arr
        }
        if (arr.length === 2) {
            if (arr[0] < arr[1]) {
                swap(arr, 0, 1)
            }
            return arr
        }

        let middle = Math.floor(arr.length / 2)
        let arr1 = arr.slice(0, middle)
        let arr2 = arr.slice(middle)

        return merge(sort(arr1, k), sort(arr2, k), k)
    }

    let sorted = sort(nums, k)

    return sorted[k - 1]
};

export { findKthLargest }