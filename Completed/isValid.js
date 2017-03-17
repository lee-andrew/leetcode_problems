/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var stack = [];
    for(var i=0; i < s.length; i++){
        if(s.charAt(i)=="{" || s.charAt(i)=="[" || s.charAt(i)=="("){
            stack.push(s.charAt(i));
        }
        else if(s.charAt(i)=="}" || s.charAt(i)=="]" || s.charAt(i)==")") {
            if(stack.length <= 0){
                return false;
            }
            switch(s.charAt(i)){
                case "}":
                    if(stack[stack.length - 1] != "{"){
                        return false;
                    }
                    stack.pop();
                    break;
                case "]":
                    if(stack[stack.length - 1] != "["){
                        return false;
                    }
                    stack.pop();
                    break;
                case ")":
                    if(stack[stack.length - 1] != "("){
                        return false;
                    }
                    stack.pop();
                    break;
                default:
                    break;
            }
        }
    }
    if(stack.length === 0){
        return true;
    }
    else{
        return false;
    } 
};

console.log(isValid("()()()(){}{}{}[][][]"));