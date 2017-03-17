/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
    if (num <= 0) {
        return false;
    }
    if (num <= 6) {
        return true;
    }
    for (var i = 2; i < 6; i++){
        while (num % i === 0) {
            num = num / i;
        }
        if (i === 3) {
            i = i + 1;
        }
    }
    return num == 1;
};
console.log(isUgly(7));
console.log(isUgly(10));
console.log(isUgly(14));
console.log(isUgly(-2147483648));
console.log(isUgly(214797179));