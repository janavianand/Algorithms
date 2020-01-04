/*

Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.

*/

/* Algo

Hash map

*/

var firstUniqChar = function(s) {
    let hash = {}

    for(let i=0;i<s.length;i++){
        hash[s[i]] = hash[s[i]]+1 || 0
    }

    for(let i=0;i<s.length;i++){
        if(hash[s[i]]){
            continue
        }
        return i
    }

    return -1
};
