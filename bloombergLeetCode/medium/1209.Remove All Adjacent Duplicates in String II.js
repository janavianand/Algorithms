/*

Given a string s, a k duplicate removal consists of choosing k adjacent and equal letters from s and removing them causing the left and the right side of the deleted substring to concatenate together.

We repeatedly make k duplicate removals on s until we no longer can.

Return the final string after all such duplicate removals have been made.

It is guaranteed that the answer is unique.



Example 1:

Input: s = "abcd", k = 2
Output: "abcd"
Explanation: There's nothing to delete.
Example 2:

Input: s = "deeedbbcccbdaa", k = 3
Output: "aa"
Explanation:
First delete "eee" and "ccc", get "ddbbbdaa"
Then delete "bbb", get "dddaa"
Finally delete "ddd", get "aa"
Example 3:

Input: s = "pbbcggttciiippooaais", k = 2
Output: "ps"

Link - https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/

*/

/*

Algo

1. have a stack and push the character in the stack only if
    1. previous character in the stack is not equal
    2. or previos character count + this letter is less than given k

2. Finally return all the letters in the stack. USE STRING.REPEAT() .

*/

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {
    if(s.length < 2){
        return s
    }
    let stack = [[s[0],1]]

    let pointer = 1

    while(pointer < s.length){

        if(stack.length && stack[stack.length-1][0] === s[pointer]){
            let letterMap = stack.pop()
            letterMap[1] += 1
            if(letterMap[1] < k){
                stack.push(letterMap)
            }
        }else{
            stack.push([s[pointer],1])
        }

        pointer += 1
    }

    return stack.reduce((a,b)=>a+=b[0].repeat(b[1]),'')
};
