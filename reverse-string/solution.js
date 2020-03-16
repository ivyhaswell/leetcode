/* https://leetcode-cn.com/problems/reverse-string/ */
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    // 直接用reverse就能实现，但这样做就有点没意义了
    // return s.reverse()

    let len = s.length
    for (let i = 0; i < len / 2; i++) {
        let temp = s[i]
        s[i] = s[len - 1 - i]
        s[len - 1 - i] = temp
    }
};

export { reverseString }