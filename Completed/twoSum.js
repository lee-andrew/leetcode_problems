/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var n = nums.length;
    if(n === 2){
        return [0, 1];
    }

    for ( var i = 0; i < nums.length; i++ ) {
        var j = nums.indexOf( target - nums[i] );
        if ( j !== -1 && i !== j ) {
            return [i, j];
        }
    } 
};

console.log(twoSum([2, 7, 11, 15], 0));
console.log(twoSum([3, 2 , 4], 6));