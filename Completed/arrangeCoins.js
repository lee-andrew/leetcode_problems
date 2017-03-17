/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    var coins = n;
    var full = 0;
    var k = 1;
    while (coins > 0) {
        coins = coins - k;
        if (coins < 0) {
            full = k - 1;
        }
        else {
            full = k;
        }
        k = k + 1;
    }
    return full;
};

console.log(arrangeCoins(5));