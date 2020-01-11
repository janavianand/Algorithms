
/*
Given an array of strings, group anagrams together.
Example:
Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
Link - https://leetcode.com/problems/group-anagrams/
*/
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    if(!strs.length){
        return strs
    }
    if(strs.length === 1){
        return [strs]
    }
    let result = []
    let hash = {}
    for(let i=0;i<strs.length;i++){
        let word = strs[i]
        let sortedWord = word.split('').sort().join('')
        if(hash[sortedWord]!==undefined){
            result[hash[sortedWord]].push(word)
        }else{
            result.push([word])
            hash[sortedWord] = result.length-1
        }
    }
    return result
};
