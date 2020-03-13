/* https://leetcode-cn.com/problems/multiply-strings/ */

/**
 * 分为两步，第一步算出num2的每一位与num1相乘的乘积（根据位数会在后面补0），然后将得到的所有
 * 乘积两两相加
 * 
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
    if (num1 === '0' || num2 === '0') {
        return '0'
    }

    function mult_string_and_char(s) {
        /* 对计算做一个缓存 */
        let mult_cache = {}
        return function (c) {
            if (mult_cache[c]) {
                return mult_cache[c]
            }

            c = +c
            let extra = 0
            let sum = ''
            for (let i = s.length - 1; i >= 0; i--) {
                let val = (num1[i]) * c + extra
                sum = (val % 10) + sum
                extra = Math.floor(val / 10)
            }
            if (extra) {
                sum = extra + sum
            }
            mult_cache[c] = sum
            return sum
        }
    }

    function add_string(s1, s2) {
        let len1 = s1.length
        let len2 = s2.length
        let max_len = Math.max(len1, len2)

        let extra = 0
        let sum = ''
        for (let i = 0; i < max_len; i++) {
            let val1 = +(s1[len1 - 1 - i] || 0)
            let val2 = +(s2[len2 - 1 - i] || 0)
            let val = val1 + val2 + extra
            sum = val % 10 + sum
            extra = Math.floor(val / 10)
        }
        if (extra) {
            sum = extra + sum
        }

        return sum
    }

    let zeros = ''
    let nums = []
    let calculator = mult_string_and_char(num1)
    for (let i = num2.length - 1; i >= 0; i--) {
        nums.push(calculator(num2[i]) + zeros)
        zeros += '0'
    }
    return nums.reduce(add_string, '0')
};

export { multiply }