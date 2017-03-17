/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
        if(word.length <= 1){
            return true;
        }

        if(!IsUpperCase(word.charAt(0))){
            for(var j = 1; j < word.length; j++){
                if(IsUpperCase(word.charAt(j))){
                    return false;
                }
            }
            return true;
        }
        else if (IsUpperCase(word.charAt(0)) && !IsUpperCase(word.charAt(1))){
            for(var j = 2; j < word.length; j++){
                if(IsUpperCase(word.charAt(j))){
                    return false;
                }
            }
            return true;
        }
        else if(IsUpperCase(word.charAt(0))){
            for(var j = 1; j < word.length; j++){
                if(!IsUpperCase(word.charAt(j))){
                    return false;
                }
            }
            return true;
        }
        else{
            return false;
        }
};

var IsUpperCase = function(c){
    if (c == c.toLowerCase()) {
        return false;
    }
    else {
        return true;
    }
};