/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var zeroes = 0;
    for ( var i = 0; i < nums.length; i++ ) {
        if ( i + zeroes === nums.length - 1 ) {
            break;
        }
        if ( nums[i] === 0 ) {
            zeroes = zeroes + 1;
            nums.splice(i, 1);
            nums.push(0);
            i = i - 1;
        }
    }
    console.log(nums);
};
moveZeroes([0, 0 , 1]);
moveZeroes([0, 1, 0, 3, 12]);
moveZeroes([1, 2 ,3 ,4 , 0 ,5 ,6 ,7, 0 ,8 ,9]);