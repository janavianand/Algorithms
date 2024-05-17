/*
https://leetcode.com/problems/next-greater-element-i/

496. Next Greater Element I
Easy

1754

2304

Add to List

Share
You are given two arrays (without duplicates) nums1 and nums2 where nums1’s elements are subset of nums2. Find all the next greater numbers for nums1's elements in the corresponding places of nums2.

The Next Greater Number of a number x in nums1 is the first greater number to its right in nums2. If it does not exist, output -1 for this number.

Example 1:
Input: nums1 = [4,1,2], nums2 = [1,3,4,2].
Output: [-1,3,-1]
Explanation:
    For number 4 in the first array, you cannot find the next greater number for it in the second array, so output -1.
    For number 1 in the first array, the next greater number for it in the second array is 3.
    For number 2 in the first array, there is no next greater number for it in the second array, so output -1.
Example 2:
Input: nums1 = [2,4], nums2 = [1,2,3,4].
Output: [3,-1]
Explanation:
    For number 2 in the first array, the next greater number for it in the second array is 3.
    For number 4 in the first array, there is no next greater number for it in the second array, so output -1.
Note:
All elements in nums1 and nums2 are unique.
The length of both nums1 and nums2 would not exceed 1000.

*/


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
  if(!nums1 || !nums2 || !nums1.length || !nums2.length){
      return []
  }

  let stck = []
  let hashMap = new Map()

  for(let i=0;i<nums2.length;i++){
      if(nums2[i+1] && nums2[i] < nums2[i+1]){
          hashMap.set(nums2[i],nums2[i+1])
          while(stck.length && stck[stck.length-1] < nums2[i+1]){
              hashMap.set(stck.pop(),nums2[i+1])
          }
      }else{
          while(stck.length && stck[stck.length-1] < nums2[i]){
              hashMap.set(stck.pop(),nums2[i])
          }
          stck.push(nums2[i])
      }

  }

  let result = new Array(nums1.length).fill(-1)

  for(let j=0;j<nums1.length;j++){
      result[j] = hashMap.get(nums1[j]) || -1
  }

  return result
};


/*Optimized sol

var nextGreaterElement = function(nums1, nums2) {
    const result = []
    const map = new Map()
    const stack = []
    for (let i = 0; i < nums2.length; i++) {
        while (stack.length && nums2[i] > stack[stack.length - 1]) {
            map.set(stack.pop(), nums2[i])
        }
        stack.push(nums2[i])
    }
    while (stack.length) {
        map.set(stack.pop(), - 1)
    }
    for (let i = 0; i < nums1.length; i++) {
        result[i] = map.get(nums1[i])
    }
    return result
};



*/
