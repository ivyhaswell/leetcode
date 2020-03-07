/* https://leetcode-cn.com/problems/merge-sorted-array/ */
/**
 * 这道题目很简单，但有个很别扭的地方，就是特喵的要改原数组而不是返回一个新数组
 * 而且特地给数组预留了位置又通过其他参数告知长度，很明显是在其他语言里面数组初始化分配长度，
 * 但是在js里面数组长度并不固定啊
 * 
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    nums1.length = m

    let p1 = 0
    let p2 = 0

    while (p1 < m || p2 < n) {
        if (p1 === m) {
            while (p2 < n) {
                nums1.push(nums2[p2])
                p2++
            }
            break
        }
        if (nums2[p2] < nums1[p1]) {
            nums1.splice(p1, 0, nums2[p2])
            p1++
            p2++
            m++
            continue
        }
        p1++
    }
};

export { merge }