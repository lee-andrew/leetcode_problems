/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    var prime = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101];
    var primeMap = {};
    var groupMap = {}
    var group = [];
    for ( var i = 0; i < 26; i++ ) {
        primeMap[ String.fromCharCode(97 + i) ] = prime[i];
    }

    for ( var i = 0; i < strs.length; i++ ) {
        var m = primeAnagram(strs[i], primeMap);
        if ( !(m in groupMap) ) {
            groupMap[m] = [ strs[i] ];
        }
        else {
            groupMap[m].push( strs[i] );
        }
    }
    
    for ( var p in groupMap) {
        group.push(groupMap[p]);
    }
    
    return group;
    
};

var primeAnagram = function(str, map) {
    var total = 1;
    for ( var i = 0; i < str.length; i++ ) {
        total = total * map[ str.charAt(i) ];
    }
    return total;
};

var str = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log( groupAnagrams(str) );
