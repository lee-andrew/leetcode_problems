/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    var max1 = null;
    var max2 = null;
    var max3 = null;

    for (var i = 0; i < nums.length; i++) {
      if (max1 === null || max2 === null || max3 === null) {
            if (max1 !== null && max2 === null && max3 === null) {
                if (max1 === nums[i]) {
                    // do nothing
                }
                else if (max1 < nums[i]) {
                    max2 = max1;
                    max1 = nums[i];
                }
                else {
                    max2 = nums[i];
                }
            }
            else if (max1 !== null && max2 !== null && max3 === null) {
                if (max1 === nums[i] || max2 === nums[i]) {
                    //do nothing
                }
                else if (max1 < nums[i]) {
                    max3 = max2;
                    max2 = max1;
                    max1 = nums[i];
                }
                else if (max2 < nums[i]){
                    max3 = max2;
                    max2 = nums[i];
                }
                else {
                    max3 = nums[i];
                }
            }
            else {
                max1 = nums[i];
            }
        }
        else {  // none are null
            if (max1 === nums[i] || max2 === nums[i] || max3 === nums[i]) {
                // do nothing
            }
            else {
                if (max1 < nums[i]) {
                    max3 = max2;
                    max2 = max1;
                    max1 = nums[i];
                }
                else if (max2 < nums[i]) {
                    max3 = max2;
                    max2 = nums[i];
                }
                else if (max3 < nums[i]) {
                    max3 = nums[i];
                }
            }
        }
    }


    if (max3 === null) {
        return max1;
    }
    else {
        return max3;
    }
};

console.log(thirdMax([1,2,2,2,2,3,3,4,8,2,87,43,7]));
console.log(thirdMax([87,43]));