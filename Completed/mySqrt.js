/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x === 0){
        return 0;
    }
    
    var guess = 1;
    var decimals = 0.000001;
    var answer =  newton(newtonFx(x, guess), newtonDFx(guess), guess);

    while(difference(answer, guess) > decimals ){
        var tmp = answer;
        answer = newton(newtonFx(x, answer), newtonDFx(answer), answer);
        guess = tmp;
    }
    return Math.floor(answer);

};

var difference = function(x, y){
    var n = x - y;
    if(n <= 0){
        return -n;
    }
    else{
        return n;
    }
    
}

var newtonFx = function(x, n){
    return n * n - x;
};

var newtonDFx = function(n){
    return 2 * n;
}
;
var newton = function(fx, dfx, n){
    return n - fx / dfx;
};
console.log(mySqrt(3));