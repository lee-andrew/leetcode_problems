/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    for ( var i = 0; i < s.length; i++) {
        var substr = s.substring(0,i) + s.substring(i+1);  
        if( substr.indexOf(s.charAt(i)) === -1 ) {
            return i;
        }
    }
    return -1;
};

console.log(firstUniqChar("loveleetcode"));