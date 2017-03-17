/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length <= 0){
        return 0;
    }

    for(var i=0; i < nums.length-1; i++){
        if(nums[i]==nums[i+1]){
            i = i + 1;
        }
        while(nums[i]==nums[i+1]){
            nums.splice(i+1, 1);
        }
    }
    return nums.length;
};

var arr1 = [2];
console.log(removeDuplicates(arr1));