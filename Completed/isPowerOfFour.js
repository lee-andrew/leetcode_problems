/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
    if (num <= 0) {
        return false;
    }
    var log = Math.log(num) / Math.log(4);
    if (log - Math.floor(log) === 0) {
        return true;
    }
    else {
        return false;
    }
};

console.log(isPowerOfFour(1));