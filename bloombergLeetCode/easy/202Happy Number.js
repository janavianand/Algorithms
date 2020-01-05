/*

Write an algorithm to determine if a number is "happy".

A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

Example:

Input: 19
Output: true
Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1

Link - https://leetcode.com/problems/happy-number/
*/

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let queue = []
    let seen = {}

    while(true){
        let num = n
        while(n){
            num = n%10
            n -= num
            n /= 10
            queue.push(num)
        }
        while(queue.length){
            let number = queue.shift()
            n += number ** 2
        }
        if(n === 1){
            return true
        }else if(!seen[n]){
            seen[n] = true
        }else{
            return false
        }
    }
};
