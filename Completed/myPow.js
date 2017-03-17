/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if(n === 0){
        return 1;
    }    
    if(n < 0){
        n = -n;
        x = 1/x;
    }
    if(n === 1){
        return x;
    }
    if(n === 2){
        return x * x;
    }
    if(n%2 === 0){
        return myPow(x * x, Math.floor(n/2));
    }
    else{
        return myPow(x * x, Math.floor(n/2)) * x;
    }
};

console.log(myPow(2,2));