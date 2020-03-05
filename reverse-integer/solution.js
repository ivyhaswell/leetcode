/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let num = 0
    let sign = x < 0 ? -1 : 1
    x = Math.abs(x)
    while (x >= 1) {
        num = num * 10 + x % 10
        x = Math.floor(x / 10)
    }
    num = num * sign
    if (num > Math.pow(2, 31) - 1 || num < - Math.pow(2, 31)) {
        return 0
    }
    return num
};

export { reverse }