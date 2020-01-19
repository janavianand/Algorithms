

/*

Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., [0,0,1,2,2,5,6] might become [2,5,6,0,0,1,2]).

You are given a target value to search. If found in the array return true, otherwise return false.

Example 1:

Input: nums = [2,5,6,0,0,1,2], target = 0
Output: true
Example 2:

Input: nums = [2,5,6,0,0,1,2], target = 3
Output: false
Follow up:

This is a follow up problem to Search in Rotated Sorted Array, where nums may contain duplicates.
Would this affect the run-time complexity? How and why?

*/

/*

Algo

1. Follow the same approach as in search rotated sorted array.
2. Specify each conditions explicitly in the else if statement instead of else
3. Narrow down the range
4. if range not found, then move the end-1. (for repeated numbers)
5. worst case with all repeated numbers O(N)

*/


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
  if(!nums.length){
      return false
  }

  let start = 0
  let end = nums.length-1

  while(start<=end){
      let mid = Math.floor((start+end)/2)
      if(nums[mid] === target){
          return true
      }
      if(nums[mid] < nums[end]){
          if(nums[mid] < target && target <= nums[end]){
              start = mid+1
          }else{
              end = mid-1
          }
      }else if(nums[mid] > nums[end]){
          if(nums[mid] > target && target >= nums[start]){
              end = mid-1
          }else{
              start = mid+1
          }
      }else{
          end -= 1
      }
  }
  return false
};
