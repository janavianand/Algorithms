/*

Implement pow(x, n), which calculates x raised to the power n (xn).

Example 1:

Input: 2.00000, 10
Output: 1024.00000
Example 2:

Input: 2.10000, 3
Output: 9.26100
Example 3:

Input: 2.00000, -2
Output: 0.25000
Explanation: 2-2 = 1/22 = 1/4 = 0.25

Link - https://leetcode.com/problems/powx-n/

*/

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if(n<0){
        x=1/x
        n=-n
    }
    return helper(x,n)
};

function helper(x,n){
    if(n===0){
        return 1.0
    }
    let half = helper(x,Math.floor(n/2))
    if(n%2 === 0){
        return half*half
    }
    return half*half*x
}
