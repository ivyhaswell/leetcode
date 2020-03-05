/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    if (!nums1.length) { return find_median_in_array(nums2) }
    if (!nums2.length) { return find_median_in_array(nums1) }

    /* 两个指针分别用来遍历两个数组 */
    let p1 = 0
    let p2 = 0

    let total_len = nums1.length + nums2.length
    /* 是否为偶数个 */
    let is_even = total_len % 2 === 0
    /* 中间数的位置，分奇数偶数两种情况，奇数取中间元素的位置，偶数取中间偏右那个的位置 */
    let middle_index = Math.floor(total_len / 2)
    /* 遍历的位置，判断到遍历的位置达到middle_index，则说明要找的中位数出来了 */
    let traverse_index = 0
    /* 因为偶数个元素需要取中间两个，因此在这里还需要记录一下前一个遍历的元素 */
    let prev_num

    while (traverse_index < total_len) {
        /* 当前遍历的数 */
        let current_num

        /**
         * 四种情况：
         * 1. p1遍历完了，取p2
         * 2. p2遍历完了，取p1
         * 3. 比较当前p1和p2的大小，p1小则取p1
         * 4. 否则p2小，取p2
         */
        if (p1 >= nums1.length) {
            current_num = nums2[p2]
            p2++
        } else if (p2 >= nums2.length) {
            current_num = nums1[p1]
            p1++
        } else if (nums1[p1] < nums2[p2]) {
            current_num = nums1[p1]
            p1++
        } else {
            current_num = nums2[p2]
            p2++
        }

        /* 达到中位数位置了，根据总数是奇数还是偶数决定计算中位数并返回 */
        if (middle_index === traverse_index) {
            return is_even ? (prev_num + current_num) / 2 : current_num
        }

        traverse_index++
        prev_num = current_num
    }
};

function find_median_in_array(arr) {
    if (arr.length % 2 === 0) {
        return (arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2
    }
    return arr[(arr.length - 1) / 2]
}

export { findMedianSortedArrays }