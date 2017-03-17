/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    var n = nums.length;
    var output = new Array(n);
    if (n === 0) {
        return output;
    }
    else if (n === 1) {
        output[0] = 0;
        return output;
    }
    var product = 1;
    var zeros = 0;
    for (var i = 0; i < n; i++) {
        if (nums[i] !== 0) {
            product = product * nums[i];
        }
        else {
            zeros = zeros + 1;
            if (zeros >= 2) {
                output.fill(0);
                return output;
            }
        }
    }
    
    for (var i = 0; i < n; i++) {
        if (nums[i] === 0) {
            output[i] = product;
        }
        else if (zeros === 1){
            output[i] = 0;
        }
        else {
            output[i] = Math.round(Math.pow((Math.pow(product, -1) * nums[i]), -1));
        }   
    }
    return output;
};

var multiply = function(x, y) {
    return x * y;
}

console.log(productExceptSelf([0,1,2,3,4]));