/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if (n <= 0) {
        return false;
    }
    var log = Math.log(n) / Math.log(3);
    if (Math.abs(log - Math.floor(log)) <= 0.0000000001 || Math.abs(log - Math.ceil(log)) <= 0.0000000001) {
        return true;
    }
    else {
        return false;
    }
};

console.log(isPowerOfThree(14348907));