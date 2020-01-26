/*

Given a non-empty list of words, return the k most frequent elements.

Your answer should be sorted by frequency from highest to lowest. If two words have the same frequency, then the word with the lower alphabetical order comes first.

Example 1:
Input: ["i", "love", "leetcode", "i", "love", "coding"], k = 2
Output: ["i", "love"]
Explanation: "i" and "love" are the two most frequent words.
    Note that "i" comes before "love" due to a lower alphabetical order.
Example 2:
Input: ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], k = 4
Output: ["the", "is", "sunny", "day"]
Explanation: "the", "is", "sunny" and "day" are the four most frequent words,
    with the number of occurrence being 4, 3, 2 and 1 respectively.

Link - https://leetcode.com/problems/top-k-frequent-words/

*/

/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    if(!words.length || !k){
        return []
    }

    let map = new Map()

    for(let word of words){
        map.set(word,map.get(word)+1 || 1)
    }
    let sortedMap = [...map].sort((a,b)=>{
        if(a[1]>b[1]){
            return -1
        }
        if(a[1]<b[1]){
            return 1
        }
        if(a[0]<b[0]){
            return -1
        }
        if(a[0]>b[0]){
            return 1
        }
        return 1
    })

    return sortedMap.slice(0,k).map(word=>word[0])
};
