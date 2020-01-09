/*

Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.

Your algorithm's runtime complexity must be in the order of O(log n).

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1

Link - https://leetcode.com/problems/search-in-rotated-sorted-array/
*/


/*
Algo

1. Try to isolate the order.
2. if the mid < target and the end > target then we located order
3. or if the mid > target and the start < target then that might be a range we can get the target



*/


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if(!nums.length){
        return -1
    }
    let start = 0
    let end = nums.length-1

    while(start<=end){
        let mid = Math.floor((start+end)/2)
        if(nums[mid] === target){
            return mid
        }
        if(nums[start] <= nums[mid]){
            if(nums[mid] > target && nums[start]<=target){
                end = mid-1
            }else{
                start = mid+1
            }
        }else{
            if(nums[mid] < target && nums[end]>=target){
                start = mid+1
            }else{
                end = mid-1
            }
        }
    }
    return -1
};
