/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    if (s.length < 2) { return s }
    if (s.length === 2) { return s[0] === s[1] ? s : s[0] }

    /* 回文字符串 */
    let palindrome = ''
    /* 指针指向当前查找开始位置 */
    let pointer = Math.ceil(s.length / 2) - 1
    /* 每次循环之后改变pointer的位置，值分别为+1,-2,+3,-4,... */
    let add = +1

    while (pointer > 0 && pointer < s.length) {
        /* aba型回文查找 */
        if (s[pointer - 1] === s[pointer + 1]) {
            let pal = find_palindrome_with_index(s, pointer - 1, pointer + 1)
            palindrome = pal.length > palindrome.length ? pal : palindrome
        }
        /* abba型回文查找 */
        if (s[pointer - 1] === s[pointer]) {
            let pal = find_palindrome_with_index(s, pointer - 1, pointer)
            palindrome = pal.length > palindrome.length ? pal : palindrome
        }

        /* 更新pointer和add */
        pointer = pointer + add
        add = add > 0 ? -add - 1 : -add + 1

        /* 当剩余的字符串继续查找不可能比当前的字符串大时，终止循环 */
        let pointer_left_max = (pointer * 2) + 1
        let pointer_right_max = (s.length - 1 - pointer) * 2 + 1
        if (pointer_left_max < palindrome.length || pointer_right_max < palindrome.length) {
            break
        }
    }
    return palindrome || s[0]
};

/* 根据开始的左右index，往字符串两端查找回文 */
function find_palindrome_with_index(s, prev_index, next_index) {
    while (prev_index >= 0 && next_index < s.length) {
        if (s[prev_index] === s[next_index]) {
            prev_index--
            next_index++
            continue
        }
        break
    }
    if (prev_index > next_index) {
        return ''
    }
    return s.substring(prev_index + 1, next_index)
}

export { longestPalindrome }
