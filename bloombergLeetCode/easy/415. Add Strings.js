/*
https://leetcode.com/problems/add-strings/

415. Add Strings

Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

Note:

The length of both num1 and num2 is < 5100.
Both num1 and num2 contains only digits 0-9.
Both num1 and num2 does not contain any leading zero.
You must not use any built-in BigInteger library or convert the inputs to integer directly.

*/

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  if(!num1.length && !num2.length){
      return ''
  }

  let result = ''
  let carry = 0

  let limit1 = num1.length-1
  let limit2 = num2.length-1

  while(limit1 >= 0 || limit2 >= 0){

      let a = +(num1[limit1]) || 0
      let b = +(num2[limit2]) || 0

      let sum = a + b + carry

      result = sum <10 ? sum+result : (sum % 10)+result
      carry = sum < 10 ? 0 : 1

      limit1 -= 1
      limit2 -= 1
  }
  return carry ? carry + result : result
};
