/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var lastSpaceIndex;
    s = s.trim();
    lastSpaceIndex = s.lastIndexOf(" ");
    if (lastSpaceIndex === -1) {
        return s.length;
    }
    else {
        s = s.substr(lastSpaceIndex + 1);
        return s.length;
    }
};

console.log(lengthOfLastWord("asdfasfas sfsd fds  as s      fdsdsfs "));