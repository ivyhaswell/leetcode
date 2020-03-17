/* https://leetcode-cn.com/problems/spiral-matrix-ii/ */
/**
 * 和之前那道矩阵题目挺像，还是一层一层递归读取
 * 
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    let res = Array(n)
    for (let i = 0; i < n; i++) {
        res[i] = Array(n)
    }

    let margin = 0
    let fill_num = 1
    function fill_martrix() {
        /* 解决奇数矩阵下填充最中心一个元素会反复填充被后一个覆盖的情况 */
        if (2 * margin + 1 === n) {
            res[margin][margin] = fill_num
            return
        }

        for (let i = margin; i < n - margin; i++) {
            res[margin][i] = fill_num
            fill_num++
        }
        for (let i = margin + 1; i < n - margin - 1; i++) {
            res[i][n - 1 - margin] = fill_num
            fill_num++
        }
        for (let i = n - margin - 1; i >= margin; i--) {
            res[n - 1 - margin][i] = fill_num
            fill_num++
        }
        for (let i = n - 2 - margin; i > margin; i--) {
            res[i][margin] = fill_num
            fill_num++
        }
    }
    while (margin < n / 2) {
        fill_martrix()
        margin++
    }

    return res
};

export { generateMatrix }