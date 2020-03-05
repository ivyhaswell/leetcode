/* https://leetcode-cn.com/problems/palindrome-number/ */

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0) { return false }
    /**
     * 不能转换字符串，于是很简单就将原数辗转整除得到每一位，然后赋值加给新的数，最后两数相等
     * 则是回文数字  
     */
    let num1 = x
    let num2 = 0
    while (x) {
        num2 = num2 * 10 + x % 10
        x = Math.floor(x / 10)
        if (x < 1) { break }
    }
    return num1 === num2
};

export { isPalindrome }