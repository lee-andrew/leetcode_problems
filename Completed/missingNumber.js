/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    var result = nums.length;
    for (var i = 0; i < nums.length; i++) {
        result = result ^ nums[i];
        result = result ^ i;
    }
    return result;
};

console.log(missingNumber([0,1,2,3,4,6,7,8]));