/**
 * @param {number[]} stones
 * @return {boolean}
 */
var canCross = function(stones) {
    if (stones[1] !== 1) {
        return false;
    }
    var k = 1;
    
    for (var i = 1; i < stones.length - 1; i++) {
        console.log("I: "+i);
        console.log("K: "+k);
        if (!nextJump(k, stones[i + 1] - stones[i])) {
            return false;
        }
        else {
            var j = 1;
            while (nextJump(k, stones[i + j + 1] - stones[i])) {
                j = j + 1;
            }
            k = stones[i + j] - stones[i]; // new jump units
            i = i + j - 1;

        }
        
    }
    return true;
};

var nextJump = function(k, distance) {
    if (k - 1 == distance || k == distance || k + 1 == distance) {
        return true;
    }
    else {
        return false;
    }
}

console.log(canCross([0,1,3,5,6,8,12,17]));
console.log(canCross([0,1,2,3,4,8,9,11]));
console.log(canCross([0,1,3,4,5,7,9,10,12]));