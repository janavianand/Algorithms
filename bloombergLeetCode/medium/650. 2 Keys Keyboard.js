/*

Initially on a notepad only one character 'A' is present. You can perform two operations on this notepad for each step:

Copy All: You can copy all the characters present on the notepad (partial copy is not allowed).
Paste: You can paste the characters which are copied last time.


Given a number n. You have to get exactly n 'A' on the notepad by performing the minimum number of steps permitted. Output the minimum number of steps to get n 'A'.

Example 1:

Input: 3
Output: 3
Explanation:
Intitally, we have one character 'A'.
In step 1, we use Copy All operation.
In step 2, we use Paste operation to get 'AA'.
In step 3, we use Paste operation to get 'AAA'.


Note:

The n will be in the range [1, 1000].

Link - https://leetcode.com/problems/2-keys-keyboard/
*/

/*
Algo

similar to finding GCD

start from 2 coz for min N=1 we need basic 2 operations copy and paste
if it is a divisor then add to result and divide N by 2 and repeat the above step
if it is not a divisor, then +1 until we find the divisor
Repeat the above operation till N>1

*/

/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function(n) {
    let result = 0
    let num = 2
    while(n>1){
        while(n%num === 0){
            result += num
            n /= num
        }
        num += 1
    }
    return result
};
