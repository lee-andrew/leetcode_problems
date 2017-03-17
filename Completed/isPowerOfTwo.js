/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfTwo = function(num) {
    if (num <= 0) {
        return false;
    }
    var log = Math.log2(num);
    if (log - Math.floor(log) === 0) {
        return true;
    }
    else {
        return false;
    }
};

console.log(isPowerOfFour(2));