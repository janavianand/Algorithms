/*


Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.
If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).
The replacement must be in-place and use only constant extra memory.
Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.
1,2,3 → 1,3,2
3,2,1 → 1,2,3
1,1,5 → 1,5,1
Link - https://leetcode.com/problems/next-permutation/
*/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    if(!nums.length){
        return []
    }
    let i = nums.length-2;
    while(i>=0 && nums[i+1]<=nums[i]){
        i-=1
    }
    if(i>=0){
        let j=nums.length-1;
        while(j>=0 && nums[j] <= nums[i]){
            j-=1
        }
        swap(nums,i,j)
    }
    reverse(nums,i+1)
};
function reverse(nums,start){
    let i=start
    let j=nums.length-1
    while(i<j){
        swap(nums,i,j)
        i+=1
        j-=1
    }
}
function swap(arr,i,j){
    [arr[i],arr[j]] = [arr[j],arr[i]]
}
