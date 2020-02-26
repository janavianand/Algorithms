/*


Given an unsorted integer array, find the smallest missing positive integer.
Example 1:
Input: [1,2,0]
Output: 3
Example 2:
Input: [3,4,-1,1]
Output: 2
Example 3:
Input: [7,8,9,11,12]
Output: 1
Note:
Your algorithm should run in O(n) time and uses constant extra space.
Link - https://leetcode.com/problems/first-missing-positive/
*/
/*
Algorithm
1. if the array does not contain 1, then return 1 (edge case)
2. Replace all the negative numbers and numbers greater than the array length wit '1'
3. loop over the array and convert the visited index of the number to -ve. handle duplicates by using Math.abs
4. if the num equals array length and conver the nums[0]
5. first check the array from 1 for any positive number. if yes then thats the missing positive number
6. else if num[0] is positive then return array length as the first missing positive number
7. return length+1 finally
link - https://leetcode.com/problems/first-missing-positive/solution/
is very clear
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    if(!nums.length){
        return 1
    }
    if(!nums.includes(1)){
        return 1
    }
    let limit = nums.length
    if(limit===1){
        return 2
    }
    nums = nums.map(num=>{
        if(num<=0 || num>limit){
            return 1
        }
        return num
    })
    for(let i=0;i<nums.length;i++){
        let digit = Math.abs(nums[i])
        if(digit === limit){
            nums[0] = -Math.abs(nums[0])
        }else{
            nums[digit] = -Math.abs(nums[digit])
        }
    }
    for(let i=1;i<nums.length;i++){
        if(nums[i]>0){
            return i
        }
    }
    if(nums[0]>0){
        return limit
    }
    return limit+1
};
