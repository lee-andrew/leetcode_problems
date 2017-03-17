/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length <= 0){
        return 0;
    }

    for(var i=0; i < nums.length-1; i++){
        while(nums[i]==nums[i+1]){
            nums.splice(i+1, 1);
        }
    }
    return nums.length;
};

var arr1 = [1,1,1,2,2,3],;
console.log(removeDuplicates(arr1));