/*

Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

Note: The algorithm should run in linear time and in O(1) space.

Example 1:

Input: [3,2,3]
Output: [3]
Example 2:

Input: [1,1,1,3,3,2,2,2]
Output: [1,2]

Link - https://leetcode.com/problems/majority-element-ii/
*/

/*

Algo

Boyer-moore solution

we know that the for a given array we can get max two elements that might exceed the count.

ex - [1,1,1,2,2,3,3,3] => a number cannot exceed 2. so output [1,3]
ex - [1,1,2,2,3,3] => a number cannot exceed 3, output []

Hence it is obvious that an array cannot have more than 2 invalid repeating numbers since the criteria is (more than n/3). if its n/4, then we will have 3 max numbers.

with that in mind. follow the algo below

1. have a dummy compare1 and compare2 and its corresponding count
2. increment corresponding count if you encounter the value
3. if the count is 0 then that means that value has repeated valid amount of time. so update the compare1 or compare2 according when encountering nums[i]!== compare. set count to 1

once outside the loop, check if the compare1 and compare2 count in nums array. if its greater than n/3 then push it in the result

*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    if(nums.length < 2){
        return nums
    }

    let compare1 = 0
    let compare2 = 1

    let count1 = 0
    let count2 = 0

    for(let i=0;i<nums.length;i++){
        if(nums[i] === compare1){
            count1 += 1
        }else if(nums[i] === compare2){
            count2 += 1
        }else if(!count1){
            compare1 = nums[i]
            count1 = 1
        }else if(!count2){
            compare2 = nums[i]
            count2 = 1
        }else{
            count1 -= 1
            count2 -= 1
        }
    }
    let result = []

    countNums(nums,compare1) > nums.length/3 ? result.push(compare1) : result
    countNums(nums,compare2) > nums.length/3 ? result.push(compare2) : result

    return result
};

function countNums(nums,number){
    let count = 0
    nums.forEach(num=>{
        if(num === number){
            count += 1
        }
    })
    return count
}
