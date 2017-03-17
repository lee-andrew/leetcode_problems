/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    if (num1.length < num2.length) {
        return addStrings(num2, num1);
    }

    var n = num1.length;
    var m = num2.length;
    var arr = new Array(n + 1);
    arr.fill(0);
    
    for (var i = n - 1, j = m - 1; i >= 0; i--, j--) {
        if (j < 0) {
            var sum = num1.charCodeAt(i) - 48 + arr[i + 1];
        }
        else {
            var sum =  addChars(num1.charAt(i), num2.charAt(j)) + arr[i + 1];
        }

        if (sum > 9) {
            arr[i] = arr[i] + 1;
            arr[i + 1] = sum % 10;
        }
        else {
            arr[i + 1] = sum;
        }
    }

    var str = "";
    if (arr[0] === 0) {
        for (var i = 1; i < arr.length; i++) {
            str = str + String.fromCharCode(arr[i] + 48);
        }
    }
    else {
        for (var i = 0; i < arr.length; i++) {
            str = str + String.fromCharCode(arr[i] + 48);
        }
    }
    
    return str;
};

var addChars = function(a, b) {
    return a.charCodeAt(0) + b.charCodeAt(0) - 96;
};

console.log(addStrings("0", "0"));
console.log(addStrings("99", "1"));
console.log(addStrings("35", "38"));
console.log(addStrings("450", "999"));