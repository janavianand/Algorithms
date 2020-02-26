/*

Given a set of candidate numbers (candidates) (without duplicates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.
The same repeated number may be chosen from candidates unlimited number of times.
Note:
All numbers (including target) will be positive integers.
The solution set must not contain duplicate combinations.
Example 1:
Input: candidates = [2,3,6,7], target = 7,
A solution set is:
[
  [7],
  [2,2,3]
]
Example 2:
Input: candidates = [2,3,5], target = 8,
A solution set is:
[
  [2,2,2,2],
  [2,3,3],
  [3,5]
]
Link - https://leetcode.com/problems/combination-sum/
*/
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    if(!candidates.length){
        return []
    }
    let result = []
    helper(candidates,target,[],result,0)
    return result
};
function helper(candidates,target,temp,result,pointer){
    if(target===0){
        result.push([...temp])
        return
    }
    if(target<0){
        return
    }
    for(let i=pointer;i<candidates.length;i++){
        temp.push(candidates[i])
        helper(candidates,target-candidates[i],temp,result,i)
        temp.pop()
    }
}
