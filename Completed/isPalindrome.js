/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if (s.length === 0) {
        return true;
    }

    var i = 0;
    var j = s.length - 1;

    while(i <= j) {
        
        if (isLetter(s.charAt(i))) {
            while(!isLetter(s.charAt(j))) {
                j = j - 1;
            }
            if (!sameLetter(s.charAt(i), s.charAt(j))) {
                return false;
            }
            if (Math.abs(j - i) < 1 ) {
                break;
            }
            j = j - 1;
            
        }
        i = i + 1;
    }
    return true;
};

var sameLetter = function(a, b) {

    if(a.charCodeAt(0) === b.charCodeAt(0) 
            || (Math.abs(a.charCodeAt(0) - b.charCodeAt(0)) === 32
            && (a.charCodeAt(0).between(64, 91) || a.charCodeAt(0).between(96, 123))
            && (b.charCodeAt(0).between(64, 91) || b.charCodeAt(0).between(96, 123)))) {
        return true;
    }
    return false;
};

var isLetter = function(a) {
    if (a.charCodeAt(0).between(64, 91) || a.charCodeAt(0).between(96, 123) || a.charCodeAt(0).between(47,58)) {
        return true;
    }
    return false;
};

Number.prototype.between = function(a, b) {
    var min = Math.min.apply(Math, [a, b]),
    max = Math.max.apply(Math, [a, b]);
    return this > min && this < max;
};

var str = "        A man, a plan, a canal: Panama     , ,, , , , ";
console.log(isPalindrome(str));