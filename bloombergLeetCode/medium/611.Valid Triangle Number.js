/*

Given an array consists of non-negative integers, your task is to count the number of triplets chosen from the array that can make triangles if we take them as side lengths of a triangle.
Example 1:
Input: [2,2,3,4]
Output: 3
Explanation:
Valid combinations are:
2,3,4 (using the first 2)
2,3,4 (using the second 2)
2,2,3

Link - https://leetcode.com/problems/valid-triangle-number/

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function(nums) {
    if(!nums.length){
        return 0
    }
    let result = 0

    nums.sort((a,b)=>a-b)

    for(let i=0;i<nums.length-2;i++){
        let j = i+1
        let k = j+1

        while(j<nums.length-1 && nums[i] !== 0){
            while(k<nums.length && nums[i]+nums[j] > nums[k]){
                k+=1
            }
            result += k-j-1
            j+=1
        }
    }
    return result
};
