/*

Given a collection of distinct integers, return all possible permutations.

Example:

Input: [1,2,3]
Output:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]

Link = https://leetcode.com/problems/permutations/

*/

//_________________________________________

//Heaps Algorithm

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if(!nums.length){
        return nums
    }
    let result = []
    generatePermute(nums,nums.length,result)
    return result
};

function generatePermute(nums,n,result){
    if(n === 1){
        result.push([...nums])
        return
    }
    for(let i=0;i<n;i++){
        generatePermute(nums,n-1,result)
        if(n%2 === 0){
            [nums[i],nums[n-1]] = [nums[n-1],nums[i]]
        }else{
            [nums[0],nums[n-1]] = [nums[n-1],nums[0]]
        }
    }
}
