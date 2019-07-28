//given an array of unsorted series of non-repeated, non-empty sequential numbers, find the missing number.
// ex-1: missingNumber([5,3,2,1]) then return 4.
//ex-2: missingNumber([1,4,3,2]) then return 5.

function missingNumber(arr){
  //find the max number in the array
  let maxNum = Math.max(...arr)
  //Formula for finding the sum of numbers in series. n(n+1)/2
  let sum = (maxNum * (maxNum+1))/2;
  //Total sum of given array
  let arrSum = arr.reduce((a,b)=>a+b)
  //Difference between sum will give the missing number
  return sum-arrSum === 0 ? maxNum+1 : sum-arrSum
}
