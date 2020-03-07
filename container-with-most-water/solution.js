/* https://leetcode-cn.com/problems/container-with-most-water/ */
/**
 * 解法思路还是双指针遍历，主要的问题在于每次循环指针怎么动，这里以p1左指针和p2右指针来举例:
 * 加入p1是最大解的左坐标，最大解的右坐标为px，那么最大值为:
 * A1 = (px-p1)*min(height[p1],height[px])
 * 此时的面积为:
 * A2 = (p2-p1)*min(height[p1],height[p2])
 * 因为:
 * A1>=A2
 * px-p1 <= p2-p1
 * 因此:
 * min(height[p1],height[px]) >= min(height[p1],height[p2])
 * 因此如果p1是最大解的左坐标，应当满足height[p1]>=height[p2]
 * 故每次循环时只需要判断height[p1]>=height[p2]则移动右指针，否则移动左指针
 * 
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    if (!height.length) { return 0 }

    function calc_contain(start, end) {
        return Math.min(height[start], height[end]) * (end - start)
    }

    let len = height.length
    let p1 = 0
    let p2 = len - 1
    let max = calc_contain(p1, p2)

    while (p1 < p2) {
        let contain = calc_contain(p1, p2)
        if (contain > max) {
            max = contain
        }

        if (height[p1] < height[p2]) {
            p1++
        } else {
            p2--
        }
    }

    return max
};

export { maxArea }