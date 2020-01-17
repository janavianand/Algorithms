
/*
Given an array with n objects colored red, white or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white and blue.
Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.
Note: You are not suppose to use the library's sort function for this problem.
Example:
Input: [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
Follow up:
A rather straight forward solution is a two-pass algorithm using counting sort.
First, iterate the array counting number of 0's, 1's, and 2's, then overwrite array with total number of 0's, then 1's and followed by 2's.
Could you come up with a one-pass algorithm using only constant space?
Link - https://leetcode.com/problems/sort-colors/
*/
/*
Algo
1. Move all the zeros to the start and the 2 to the end
IMPORTANT - Pay attention in pointer increment. No pointer increment when nums[pointer]===2
*/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    if(nums.length < 2){
        return nums
    }
    let start = 0
    let pointer = 0
    let end = nums.length-1
    while(pointer<=end){
        if(nums[pointer] === 0){
            swap(nums,start,pointer)
            start+=1
            pointer += 1
         }else if(nums[pointer] === 2){
            swap(nums,end,pointer)
            end-=1
        }else{
            pointer += 1
        }
    }
};
function swap(nums,i,j){
    [nums[i],nums[j]] = [nums[j],nums[i]]
}


