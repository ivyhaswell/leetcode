/* https://leetcode-cn.com/problems/longest-common-prefix/ */

/**
 * 取第一个字符串，逐字符纵向比较
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (!strs.length) { return '' }

    let prefix = ''

    for (let i = 0; i < strs[0].length; i++) {
        let char = strs[0][i]
        if (char === undefined) { break }
        let same = strs.every(str => str[i] === char)
        if (!same) { break } else {
            prefix += char
        }
    }

    return prefix
};

export { longestCommonPrefix }