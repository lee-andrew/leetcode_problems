/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    if(nums.length <= 1 || k < 0){
        return 0;
    }
    var counter = 0;
    var usedNums = [];
    if(k == 0){
        for(var i = 0; i < nums.length; i++){
            if(nums.lastIndexOf(nums[i]) != i && usedNums.indexOf(nums[i]) == -1  ){
                counter = counter + 1;
                usedNums.push(nums[i]);
            }
        }
        return counter;
    }

    var arr = [];
    

    for(var i = 0; i < nums.length; i++){
        if(arr.indexOf(nums[i]) == -1){
            arr.push(nums[i]);
            
        }
    }
    
    for(var i = 0; i < arr.length; i++){
        if(arr.indexOf(arr[i] + k) != -1){
            counter = counter + 1;
            
        }
    }
    return counter;

};