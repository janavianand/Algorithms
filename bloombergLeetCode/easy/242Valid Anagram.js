/*

Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false

Link - https://leetcode.com/problems/valid-anagram/

*/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    if(!s.length && !t.length){
        return true
    }

    if(!s.length || !t.length || t.length !== s.length){
        return false
    }

    let map = new Map()

    for(let i=0;i<s.length;i++){
        map.set(s[i],map.get(s[i])+1 || 1)
    }

    for(let j=0;j<t.length;j++){
        if(!map.has(t[j]) || !map.get(t[j])){
            return false
        }
        map.set(t[j],map.get(t[j])-1)
    }

    return true
};
