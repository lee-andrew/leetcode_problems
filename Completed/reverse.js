/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if (x === 0){
        return 0;
    }
    const INT_MAX = Math.pow(2,31);
    const SIGN = Math.sign(x);
    x = Math.abs(x);
    var lastDigit;
    var reverse;

    reverse = 0;

    while (x > 0){
        lastDigit =  x % 10;
        x = Math.trunc(x / 10);
        reverse = (reverse * 10) + lastDigit;
        console.log(reverse);
    }
    
    if(reverse > INT_MAX){
        return 0;
    }
    else if(SIGN === -1){
        return SIGN * reverse;
    }
    else{
        return reverse;
    }

};