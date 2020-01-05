/*

Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

Example 1:

Input: [3,0,1]
Output: 2
Example 2:

Input: [9,6,4,2,3,5,7,0,1]
Output: 8

*/

//Method 1

var missingNumber = function(nums) {
    if(!nums.length){
        return 0
    }
    let max = nums.length
    let total = 0
    for(let i=1;i<=max;i++){
        total += i
    }
    let sum = nums.reduce((a,b)=>a+b,0)
    return total-sum
};

//Method 2

var missingNumber = function(nums) {
    let missing = nums.length

    for(let i=0;i<nums.length;i++){
        missing ^= i ^ nums[i]
    }
    return missing
};
