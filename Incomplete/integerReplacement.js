/**
 * @param {number} n
 * @return {number}
 */
var integerReplacement = function(n) {
    var counter = 0;
    while (n !== 1) {
        if (n % 2 === 0) {
            n = n / 2;
        }
        else {
            if (n + 1 == closestPowOfTwo(n) && n + 1 !== 4) {
                n = n + 1;
            }
            else {
                n = n - 1;
            }
        }
        console.log("n: " + n);
        counter = counter + 1;
    }
    return counter;
};

var closestPowOfTwo = function(n) {
    return Math.pow(2, Math.round(Math.log2(n)));
};

//console.log(closestPowOfTwo(727));
//console.log(integerReplacement(514));
console.log(integerReplacement(65535));
console.log(integerReplacement(3));

console.log(Math.pow(2, Math.round(Math.log2(64536))));
