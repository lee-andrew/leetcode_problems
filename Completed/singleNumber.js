/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var n = 0;
    for(var i=0; i < nums.length; i++){
        n = n ^ nums[i];
    }
    return n;
};

arr = [1,2,3,4,5,6,7,1,2,4,5,6,7];
console.log(singleNumber(arr));