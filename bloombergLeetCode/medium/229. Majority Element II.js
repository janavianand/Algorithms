/*

Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

Note: The algorithm should run in linear time and in O(1) space.

Example 1:

Input: [3,2,3]
Output: [3]
Example 2:

Input: [1,1,1,3,3,2,2,2]
Output: [1,2]

Link - https://leetcode.com/problems/majority-element-ii/
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    if(nums.length < 2){
        return nums
    }

    let compare1 = 0
    let compare2 = 1

    let count1 = 0
    let count2 = 0

    for(let i=0;i<nums.length;i++){
        if(nums[i] === compare1){
            count1 += 1
        }else if(nums[i] === compare2){
            count2 += 1
        }else if(!count1){
            compare1 = nums[i]
            count1 = 1
        }else if(!count2){
            compare2 = nums[i]
            count2 = 1
        }else{
            count1 -= 1
            count2 -= 1
        }
    }
    let result = []

    countNums(nums,compare1) > nums.length/3 ? result.push(compare1) : result
    countNums(nums,compare2) > nums.length/3 ? result.push(compare2) : result

    return result
};

function countNums(nums,number){
    let count = 0
    nums.forEach(num=>{
        if(num === number){
            count += 1
        }
    })
    return count
}
