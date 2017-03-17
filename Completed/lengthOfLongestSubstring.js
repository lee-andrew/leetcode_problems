/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var map = {};
    var i = 0;
    var j = 0;
    var length = 0;

    while (i < s.length) {
        if (!(s.charAt(i) in map)) {
            map[s.charAt(i)] = 0;
            var size = Object.keys(map).length;
            length = Math.max(length, size);
            i = i + 1;
        }
        else {
            delete map[s.charAt(j)];
            j = j + 1;
        }
    }
    return length;
};

console.log(lengthOfLongestSubstring("udsgtcazkdgyijogsuvspkqrfrmgyauufocatczdhidpttxlntgdfwwnnktnmqhrejtxmucveflxzkjmdrr"));