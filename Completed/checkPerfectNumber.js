/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    var primes = [2, 3, 5 , 7 ,13];
    for ( var i = 0; i < primes.length; i++ ) {
        var formula = Math.pow(2, primes[i] - 1) * (Math.pow(2, primes[i]) - 1);
        console.log(formula);
        if ( formula === num ) {
            return true;
        }
    }
    return false;
};

console.log(checkPerfectNumber(33550336));