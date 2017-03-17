/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var n = digits.length;
    var i = n-1;
    var k = 0;
    
    if(digits[i] < 9){
        digits[i] = digits[i] + 1;
    }
    else {
        while(digits[i] === 9){
            if(i === 0){
                break;
            }
            i = i - 1;
            k = k + 1;
        }

        if(i == 0 && digits[i] !== 9){
            digits[i] = digits[i] + 1;
            for(var j = i; j < n -1; j++){ 
                digits[j+1] = 0;
            }
        }
        else if(i == 0 && digits[0] === 9){
            digits[0] = 1;
            for(var j = 1; j <= n; j++){
                digits[j] = 0;
            }
        }
        else{
            
            digits[i] = digits[i] + 1;
            for(var j = i; j < n -1; j++){ 
                digits[j+1] = 0;
            }
            
        }
    }


    return digits;
};
