/*

https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/

Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

Return the answer in an array.



Example 1:

Input: nums = [8,1,2,2,3]
Output: [4,0,1,1,3]
Explanation:
For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3).
For nums[1]=1 does not exist any smaller number than it.
For nums[2]=2 there exist one smaller number than it (1).
For nums[3]=2 there exist one smaller number than it (1).
For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
  if(!nums || !nums.length){
      return []
  }

  let sortedArr = [...nums]
  sortedArr.sort((a,b)=>a-b)

  let result = []

  for(let i=0;i<nums.length;i++){
      result.push(sortedArr.indexOf(nums[i]))
  }
  return result
};

/* optimal sol */


 /*
function merge(a, b) {
  let i = 0
  let j = 0
  let r = []
  while (i < a.length && j < b.length) {
      if (a[i] < b[j]) {
          r.push(a[i])
          i++
      } else {
          r.push(b[j])
          j++
      }
  }
  r.push(...a.slice(i))
  r.push(...b.slice(j))
  return r
}

function mSort(arr) {
  if (arr.length < 2) {
      return arr
  } else {
      let mid = Math.floor(arr.length / 2)
      let left = arr.slice(0, mid)
      let right = arr.slice(mid)
      return merge(mSort(left), mSort(right))
  }
}

function binSearch(arr, val) { // on a sorted array, naturally
  let i = 0
  let j = arr.length - 1
  while (i <= j) {
      let mid = Math.floor((i + j) / 2)
      if (arr[mid] === val && arr[mid - 1] !== val) {
          return mid
      } else if (arr[mid] < val) {
          i = mid + 1
      } else {
          j = mid - 1
      }
  }
  return -1
}

function smallerNumbersThanCurrent(nums) {
  //sort the nums array (nlogn)
  //return the left-most index with bin search(logn)
  let original = [...nums]
  // let sorted = mSort(nums)
  let sorted = nums.sort((a,b) => a - b)

  let out = original.map(el => { return binSearch(sorted, el)})
  return out
};

*/
