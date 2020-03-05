/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
    /* 符号位 */
    let sign = 1
    /* 数字 */
    let num = 0
    /* 是否已经匹配过数字或符号 */
    let met_num_or_sign = false

    /* 符号集 */
    let sign_map = {
        '+': 1,
        '-': -1,
    }

    /* 整数的合法字符集 */
    let num_map = {
        '0': 0,
        '1': 1,
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
    }
    for (let i = 0; i < str.length; i++) {
        let char = str[i]

        /* 数字的处理 */
        if (num_map[char] !== undefined) {
            num = num * 10 + num_map[char]
            met_num_or_sign = true
            continue
        }

        /* 符号处理 */
        if (sign_map[char] !== undefined) {
            if (met_num_or_sign === true) { break }
            sign = sign_map[char]
            met_num_or_sign = true
            continue
        }

        /* 处理空格 */
        if (char === ' ') {
            if (met_num_or_sign) {
                break
            }
            continue
        }

        break
    }
    /* 处理位数超出的问题 */
    num = sign * num
    if (num > 2147483647) num = 2147483647
    if (num < -2147483648) num = -2147483648

    return num
};

export { myAtoi }