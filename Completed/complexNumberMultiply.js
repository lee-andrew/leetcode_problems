/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var complexNumberMultiply = function(a, b) {
    var a1 = getA(a);
    var a2 = getB(a);
    var b1 = getA(b);
    var b2 = getB(b);
    
    var m1 = a1 * b1;   // 1*1
    var m2 = a1 * b2;   // 1*i
    var m3 = a2 * b1;   // i*1
    var m4 = a2 * b2 * -1;   // i*i

    var m5 = m2 + m3    // i + i
    var m6 = m1 + m4    // 1 + i^2
    
    var result = m6.toString() + "+" + m5.toString() + "i";
    return result;
};

var getA = function(a){
    return parseInt(a.substring(0,a.indexOf("+")));
};

var getB = function(b) {
    return parseInt(b.substring(b.indexOf("+") + 1, b.indexOf("i")));
};

console.log(complexNumberMultiply("1+1i","1+1i"));
console.log(complexNumberMultiply("1+-1i","1+-1i"));
console.log(complexNumberMultiply("-46+34i","21+-13i"));