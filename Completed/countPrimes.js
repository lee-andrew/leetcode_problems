/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    var arr = new Array(n);
    arr.fill(true);
    
    for(var i=2; i< Math.sqrt(n); i++){
        if(arr[i] === true){
            for(var j = i*i; j < n; j = j + i){
                arr[j] = false;
            }
        } 
    }

    var counter = 0;
    for(var i=2; i < arr.length; i++){
        if(arr[i] === true){
            counter = counter + 1;
        }
    }
    
    return counter;
};

console.log(countPrimes(25));