/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if (!s) { return 0 }

    /** 
     * 遍历整个字符串，每次都以当前位置开始向后查找最长的不重复字符串
     */
    let max_len = 1
    let s_len = s.length

    for (let i = 0; i < s_len; i++) {
        /* 判断到剩余的字符串长度已经不可能比当前的max_len更大时，break */
        if (s_len - i < max_len) { break }

        /* 通过cache记录字符串上次出现的位置，出现重复则命中 */
        let cache = {}
        let temp_max_len = 0
        for (let j = i; j < s_len; j++) {
            let char = s[j]
            if (cache[char] === undefined) {
                temp_max_len++
                cache[char] = j
            } else {
                max_len = Math.max(max_len, temp_max_len)
                break
            }
            /* 如果直到最后都没有重复，那这次循环的字符串就是最长的 */
            if (j === s_len - 1) {
                return s_len - i
            }
        }
    }
    return max_len
};

export { lengthOfLongestSubstring }