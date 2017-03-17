/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    var n = nums.length;
    var i = Math.floor(n/2);
    var k = 0;
    var m = n - 1;

    if (n == 1) {
        if (nums[i] < target) {
            return 1;
        }
        else return 0;
    }

    while ( m > k ) {
        if ( nums[i] === target ) {
            return i;
        }
        else if ( nums[i] < target ) {   // look right
            k = i + 1;
            if ( k > n - 1) {
                return k;
            }
            i = Math.floor( (m - i) / 2 ) + k;
            
        }
        else if ( nums[i] > target ) {   // look left
            m = i - 1;
            if ( m < 0 ) {
                return 0;
            }
            i = Math.floor( (i - k) / 2 ) + k;
        }
    }
    if (nums[i] < target) {
        return i + 1;
    }
    else {
        return i;
    }

};

var arr = [0, 2, 3, 4, 5, 12, 14 , 16, 18 ,19, 20, 24];
var arr2 = [1, 2, 3, 4, 5, 12, 14 , 15, 17 ,18, 20, 24];
console.log(searchInsert(arr, 13));
console.log(searchInsert(arr2, 16));
console.log(searchInsert([1], 2));