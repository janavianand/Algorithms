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


//__________________________________________
//Method 2

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  if(!nums.length){
      return 0
  }
  let result = []
  helper(nums,0,nums.length-1,result)
  return result
};

function helper(nums,start,end,result){
  if(start === end){
      result.push([...nums])
      return
  }
  for(let i=start;i<=end;i++){
      swap(nums,i,start)
      helper(nums,start+1,end,result)
      swap(nums,start,i)
  }
}

function swap(arr,i,j){
  [arr[i],arr[j]] = [arr[j],arr[i]]
}
