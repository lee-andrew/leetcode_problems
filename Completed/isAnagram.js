/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    for (var i = 0; i < s.length; i++) {
        var j = t.indexOf(s.charAt(i));
        if (j === -1) {
            return false;
        }
        else {
            t = t.substring(0, j) + t.substring(j + 1);
        }
    }
    return true;
};
console.log("0123456789".substring(0, 3));
console.log("0123456789".substring(10));
console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("caras", "cara"));