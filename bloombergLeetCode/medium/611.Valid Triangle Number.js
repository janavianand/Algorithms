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

/*

Algo

basic validation for a triangle = a+b < c ; b+c < a and a+c < b
we can use brute force

else

sort the numbers

that gives a+b < c given c > a and c > b; since we sorted the array, the giiven condition gets satisfied. so all we have to do is find all the combination with a+b < c

so for finding the combination, we can increment the count for each combo or

find the upper limit num[k] such that num[i]+num[j] > num[k]. from that, we know that all the above combiniations are valid triangle. so count = k-j-1.

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
