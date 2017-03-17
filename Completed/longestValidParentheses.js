/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    var stack = [];

    for (var i = 0; i < s.length; i++) {
        switch (s.charAt(i)) {
            case "(":
                stack.push(i);
                break;
            case ")":
                if (stack.length > 0) {
                    if (s.charAt(stack[stack.length - 1]) === "(") {
                        stack.pop();
                    }
                    else {
                        stack.push(i);
                    }
                }
                else {
                    stack.push(i);
                }
                break;
            default:
                break;
        }    
    } 

    if (stack.length <= 0) {
        return s.length;
    }
    else {
        var start = stack[0];
        var end =  s.length - stack[stack.length - 1] - 1;
        var middle = 0;

        if (stack.length > 1) {
            for (var i = 0; i < stack.length - 1; i++) {
                if (stack[i+1] - stack[i] > 1) {
                    middle = Math.max(middle, stack[i+1] - stack[i] - 1);
                }
            }
        }
        
    return Math.max(start, middle, end);
    }
};