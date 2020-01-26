/*

Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]

Link - https://leetcode.com/problems/move-zeroes/
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    if(!nums.length){
        return nums
    }

    let limit = nums.length-1
    let count = countZero(nums)

    while(limit>=0){
        let number = nums.pop()
        if(number){
            nums.unshift(number)
        }
        limit -= 1
    }

    while(count){
        nums.push(0)
        count -= 1
    }

    return nums
};

function countZero(nums){
    let count = 0
    nums.forEach((num)=>{
        if(num === 0){
            count += 1
        }
    })
    return count
}


//method 2 - Optimized

var moveZeroes = function(nums) {
    let nonZeroIndex = 0

    for(let i=0;i<nums.length;i++){
        if(nums[i] !== 0){
            swap(nums,i,nonZeroIndex)
            nonZeroIndex += 1
        }
    }
    return nums
}

function swap(nums,i,j){
    [nums[i],nums[j]] = [nums[j],nums[i]]
}
