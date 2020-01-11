
/*
Given a set of distinct integers, nums, return all possible subsets (the power set).
Note: The solution set must not contain duplicate subsets.
Example:
Input: nums = [1,2,3]
Output:
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]
Link - https://leetcode.com/problems/subsets/
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    if(!nums.length){
        return []
    }
    let result = [[]]
    for(let i=0;i<nums.length;i++){
        let item = nums[i]
        let length = result.length
        for(let j=0;j<length;j++){
            let arr = [...result[j]]
            arr.push(item)
            result.push(arr)
        }
    }
    return result
};
