/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var set = [];
    
    for ( var i = 0; i < nums.length - 2; i++ ) {
        for ( var j = i + 1; j < nums.length - 1; j++) {
            var k = nums.lastIndexOf( -(nums[i] + nums[j]) );
            if ( k > j) {
                if ( !inSet( [ nums[i], nums[j], nums[k] ], set ) ) {
                    set.push( [ nums[i], nums[j], nums[k] ] );
                }   
            }
            
        }
    }
    return set;
};

var inArray = function(a, b) {
    var tmp = b.slice(0);
    for ( var i = 0; i < a.length; i++ ) {
        var j = tmp.indexOf(a[i]);
        if ( j == -1 ) {
            return false;
        }
        tmp[j] = null;
        
    }
    return true;
};

var inSet = function(a, b) {
    for ( var i = 0; i < b.length; i++ ) {
        if ( inArray(a, b[i]) ) {
            return true;
        }
    }
    return false;
};

//var a = [1,2,3]
//var b = [1,2,3, 5]

//console.log( inArray(a, b) );
//console.log(a);
//console.log(b);

var c = [-1, 0, 1, 2, -1, -4];
var d = [-10,-7,-3,-9,-8,-9,-5,6,0,6,4,-15,-12,3,-12,-10,-5,-5,2,-4,13,8,-9,6,-11,11,3,-13,-3,14,
        -9,2,14,-5,8,-9,-7,-12,5,1,2,-6,1,5,4,-4,3,7,-2,12,10,-3,6,-14,-12,10,12,7,12,-14,-2,11,4,
        -10,13,-11,-4,-8,-15,-14,8,-6,-12,-14,6,7,-3,-14,-1,11,14,-6,-15,5,-13,-12,0,14,2,-11,-14,
        8,-15,-3,13,14,-7,-14,13,-15,10,-2,-14,13];
console.log(threeSum(d));