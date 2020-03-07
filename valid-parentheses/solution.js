/* https://leetcode-cn.com/problems/valid-parentheses/ */

/**
 * 按照括号的匹配规则，解法的核心思路是消消乐，遇到左括号就推进数组，遇到右括号就从数组中pop
 * 一个出来匹配，匹配不上就return false
 * 
 * 最后匹配结束，看数组中是否还有剩下的括号，没有的话说明完全匹配成功
 * 
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if (s.length === 0) { return true }
    if (s.length % 2 !== 0) { return false }

    /* 跟着我左手右手一个慢动作 */
    let left = { '(': true, '[': true, '{': true }
    let right = { ')': true, ']': true, '}': true }
    /* 在一起在一起 */
    let together = { '()': true, '[]': true, '{}': true }
    let parentheses = []

    for (let i = 0; i < s.length; i++) {
        if (left[s[i]]) {
            parentheses.push(s[i])
            continue
        } else if (right[s[i]]) {
            let tail = parentheses.pop()
            if (!together[tail + s[i]]) {
                return false
            }
        } else {
            /* 好像出现了什么奇怪的东西 */
            return false
        }
    }

    return parentheses.length === 0
};

export { isValid }