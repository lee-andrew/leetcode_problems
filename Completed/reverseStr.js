/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    var str = "";
    var j = 0;
    for (var i = 0; i < s.length; i = i + k, j++) {
        if (j % 2 == 0) {
            str = str + reverse(s.substr(i, k));
        }
        else {
            str = str + s.substr(i, k);
        }
    }

    return str;
};

var reverse = function(str) {
    if (str === "") {
        return "";
    }
    else {
        return reverse(str.substr(1)) + str.charAt(0);
    }      
};

console.log(reverseStr("abcdefg", 2));