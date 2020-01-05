/*

Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

Example 1:

Input: "A man, a plan, a canal: Panama"
Output: true
Example 2:

Input: "race a car"
Output: false

*/


var isPalindrome = function(s) {
    if(!s.length){
        return true
    }
    s = s.toLowerCase()

    let start = 0
    let end = s.length-1

    while(start<end){
        if(/\W/.test(s[start])){
            start+=1
        }else if(/\W/.test(s[end])){
            end-=1
        }else if(s[start]!==s[end]){
            return false
        }else{
            start+=1
            end-=1
        }

    }
    return true
};
