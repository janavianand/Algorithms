/*

Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note:

The solution set must not contain duplicate triplets.

Example:

Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]

Link - https://leetcode.com/problems/3sum/

*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if(nums.length < 2){
        return []
    }
    nums.sort((a,b)=>a-b)
    let result = []

    for(let i=0;i<nums.length;i++){
        if(i>0 && nums[i] === nums[i-1]){
            continue
        }
        let start = i+1
        let end = nums.length-1
        let first = -nums[i]

        while(start<end){
            let sum = nums[start]+nums[end]

            if(first === sum){
                result.push([nums[i],nums[start],nums[end]])
                start+=1
                end-=1
                while(nums[start]=== nums[start-1]){
                start+=1
                }
                while(end<nums.length-1 && nums[end] === nums[end+1]){
                end -= 1
                }
            }else if(first < sum){
                end -= 1
                while(end<nums.length-1 && nums[end] === nums[end+1]){
                end -= 1
                }
            }else{
                start += 1
                while(nums[start]=== nums[start-1]){
                start+=1
                }
            }
        }
    }
    return result
};
