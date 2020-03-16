/* https://leetcode-cn.com/problems/reverse-words-in-a-string-iii/ */
/**
 * 一个word存储词并用来做反转，每到空格更新一次sentence
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let sentence = ''
    let word = ''
    for (let i = 0; i < s.length; i++) {
        let char = s[i]
        if (char === ' ') {
            sentence += word + ' '
            word = ''
        } else {
            word = char + word
        }
    }
    sentence = sentence + word

    return sentence
};

export { reverseWords }