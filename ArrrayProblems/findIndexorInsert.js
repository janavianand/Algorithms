/* Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You may assume no duplicates in the array.

Example 1:

Input: [1,3,5,6], 5
Output: 2
Example 2:

Input: [1,3,5,6], 2
Output: 1 */

var searchInsert = function(nums, target) {
    if(nums[0] > target) return 0
    if(nums[nums.length-1] < target) return nums.length
    return searchHelper(nums,target,0,nums.length-1)
};

function searchHelper(nums,target,start,end){
    if((start+1) === end){
        if(nums[start] === target){
            return start
        }else{
            return end
        }
    }else{
        let mid = Math.floor((start+end)/2)
        if(nums[mid]===target){
            return mid
        }else if(nums[mid] < target){
            start = mid
            return searchHelper(nums,target,start,end)
        }else if(nums[mid] > target){
            end = mid
            return searchHelper(nums,target,start,end)
        }
    }
}

