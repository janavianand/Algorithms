

/*


Given a string s of '(' , ')' and lowercase English characters.

Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string.

Formally, a parentheses string is valid if and only if:

It is the empty string, contains only lowercase characters, or
It can be written as AB (A concatenated with B), where A and B are valid strings, or
It can be written as (A), where A is a valid string.


Example 1:

Input: s = "lee(t(c)o)de)"
Output: "lee(t(c)o)de"
Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.
Example 2:

Input: s = "a)b(c)d"
Output: "ab(c)d"
Example 3:

Input: s = "))(("
Output: ""
Explanation: An empty string is also valid.
Example 4:

Input: s = "(a(b(c)d)"
Output: "a(b(c)d)"

*/

/*
Algo

use stack to keep track of parenthesis.

have set to store all the indexes to remove. set to avoid any repeatations.

*/

/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    if(!s.length){
        return s
    }

    let stack = []
    let result = ''
    let remove = new Set()

    for(let i=0;i<s.length;i++){
        if(s[i] === '('){
            stack.push(i)
        }else if(s[i] === ')'){
            stack.length ? stack.pop() : remove.add(i)
        }
    }
    while(stack.length){
        remove.add(stack.pop())
    }

    for(let i=0;i<s.length;i++){
        if(!remove.has(i)){
            result+=s[i]
        }
    }

    return result
};
