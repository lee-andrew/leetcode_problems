/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    var map = {};
    var dupe;
    for ( var i = 0; i < nums.length; i++ ) {
        if ( !(nums[i] in map) ) {
            map[nums[i]] = true;
        }
        else {
            dupe = nums[i];
        }
    }
    return dupe;
};

console.log(findDuplicate([2, 5, 6, 2, 4, 1, 3]));