/*

Given an integer array, find three numbers whose product is maximum and output the maximum product.

Example 1:

Input: [1,2,3]
Output: 6


Example 2:

Input: [1,2,3,4]
Output: 24

Link - https://leetcode.com/problems/maximum-product-of-three-numbers/

/*

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    if(!nums.length){
        return 0
    }
    if(nums.length < 4){
        return nums.reduce((a,b)=>a*b,1)
    }

    nums.sort((a,b)=>a-b)

    let result = -Infinity

    for(let i=0;i<nums.length-2;i++){
        let start = i+1
        let end = nums.length-1
        let product = nums[i]
        while(start<end){
            let temp = nums[start]*nums[end]
            result = Math.max(result,product*temp)
            start += 1
            end -= 1
        }
    }
    return result === -Infinity ? 0 :result
};
