/*

Given a sorted array A of unique numbers, find the K-th missing number starting from the leftmost number of the array.



Example 1:

Input: A = [4,7,9,10], K = 1
Output: 5
Explanation:
The first missing number is 5.
Example 2:

Input: A = [4,7,9,10], K = 3
Output: 8
Explanation:
The missing numbers are [5,6,8,...], hence the third missing number is 8.
Example 3:

Input: A = [1,2,4], K = 3
Output: 6
Explanation:
The missing numbers are [3,5,6,7,...], hence the third missing number is 6.

Link - https://leetcode.com/problems/missing-element-in-sorted-array/

*/

//METHOD -1 Linear time. not optimal

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var missingElement = function(nums, k) {
    if(nums.length < 2 || !k){
        return -1
    }

    let totalMissing = 0

    for(let i=1;i<nums.length;i++){
        let missing = nums[i]-nums[i-1]-1
        if(totalMissing+missing >= k){
            let toIncrement = Math.abs(k-totalMissing)
            return nums[i-1]+toIncrement
        }
        totalMissing+=missing
    }

    return nums[nums.length-1]+Math.abs(k-totalMissing)
};


//Method-2 Binary search

var missingElement = function(nums, k) {
    if(!nums.length){
        return -1
    }

    if(!k){
        return nums[0]
    }

    let start = 0
    let end = nums.length-1

    if(nums[end]-nums[start]-end < k){
        return nums[end] + k -(nums[end]-nums[start]-end)
    }

    while(start+1<end){
        let mid = start + Math.floor((end - start) / 2);

        let diff = nums[mid]-nums[start]-(mid-start)

        if(diff<k){
            start = mid
            k -= diff
        }else{
            end = mid
        }
    }
    return nums[start]+k
};
