/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    for (var i = 0; i < s.length; i++) {
        if (isInString(s.charAt(i), t)) {
            j = t.indexOf(s.charAt(i));
            t = t.substring(0,j) + t.substring(j+1);
        }
    }
    return t;
};

var isInString = function(s, t) {
    if ( t.indexOf(s) !== -1) {
        return true;
    }
    else {
        return false;
    }
};

var s = "abcd"
var t = "abcde"
console.log(findTheDifference(s, t));