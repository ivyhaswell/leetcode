/* https://leetcode-cn.com/problems/nim-game/ */
/**
 * 这题没啥说的，脑筋急转弯
 * 
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function (n) {
    return n % 4 !== 0
};

export { canWinNim }