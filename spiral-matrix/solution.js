/* https://leetcode-cn.com/problems/spiral-matrix/ */
/**
 * 没啥花招，就是 横->竖->反横->反竖 读矩阵，读完一轮边距+1，下一轮继续读
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    if (matrix.length === 0) { return [] }

    let result_arr = []
    let row_len = matrix[0].length
    let col_len = matrix.length
    let margin = 0

    function read_matrix(m) {
        if (2 * margin > row_len || 2 * margin > col_len) { return }
        for (let i = margin; i < row_len - margin; i++) {
            result_arr.push(m[margin][i])
        }
        for (let i = margin + 1; i < col_len - margin - 1; i++) {
            result_arr.push(m[i][row_len - margin - 1])
        }
        for (let i = row_len - margin - 1; i > margin; i--) {
            result_arr.push(m[col_len - margin - 1][i])
        }
        for (let i = col_len - margin - 1; i > margin; i--) {
            result_arr.push(m[i][margin])
        }
        margin++
    }

    let size = row_len * col_len
    while (result_arr.length < size) {
        read_matrix(matrix)
    }
    /* 可能会读多一点，所以在这儿截取数组 */
    result_arr.length = size

    return result_arr
};

export { spiralOrder }