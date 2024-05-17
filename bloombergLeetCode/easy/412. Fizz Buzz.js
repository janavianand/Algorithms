/*
https://leetcode.com/problems/fizz-buzz/

412. Fizz Buzz
Easy

987

1325

Add to List

Share
Write a program that outputs the string representation of numbers from 1 to n.

But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

Example:

n = 15,

Return:
[
    "1",
    "2",
    "Fizz",
    "4",
    "Buzz",
    "Fizz",
    "7",
    "8",
    "Fizz",
    "Buzz",
    "11",
    "Fizz",
    "13",
    "14",
    "FizzBuzz"
]
*/

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  let result = []

  if(!n){
      return result
  }

  let hash = {
      3:'Fizz',
      5:'Buzz'
  }

  for(let i=1;i<=n;i++){
      let resultStr = ''

      if(i%3 === 0){
          resultStr += hash[3]
      }

      if(i%5 === 0){
          resultStr += hash[5]
      }

      if(!resultStr.length){
          resultStr += i
      }

      result.push(resultStr)
  }
  return result
};
