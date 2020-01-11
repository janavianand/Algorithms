/*

Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

Example:

Given array nums = [-1, 2, 1, -4], and target = 1.

The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

Link - https://leetcode.com/problems/3sum-closest/

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {

  if(!nums.length){
      return 0
  }

  let result = 0
  let diff = Infinity
  nums.sort((a,b)=>a-b)
  for(let i=0;i<nums.length-2;i++){
      let start = i+1
      let end = nums.length-1
      let tempdiff = 0

      while(start<end){
          let tempsum = nums[i] + nums[start] + nums[end]
          tempdiff = tempsum > target ? tempsum - target : target-tempsum

          if(tempdiff === 0){
              return target
          }

          if(tempdiff < diff){
              diff = tempdiff
              result = tempsum
          }

          if(tempsum < target){
              start += 1
          }else{
              end -= 1
          }
      }
  }
  return result
};
