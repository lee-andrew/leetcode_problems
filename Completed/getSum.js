/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    if (a === 0) {
        return b;
    }
    else if (b === 0) {
        return a;
    }
    var carry = 0;
    while ( b !== 0) {      
        carry = a & b;  
        a = a ^ b;          
        b = carry << 1;     
    }
    return a;
};

console.log(getSum(95,16));