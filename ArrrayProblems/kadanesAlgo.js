/* Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6. */

var maxSubArray = function(nums) {
    let sum = nums[0];
	let tempSum = 0;
	for(let i=0;i<nums.length;i++){
		tempSum = ((tempSum + nums[i]) > nums[i]) ? (tempSum + nums[i]) : nums[i]
		sum = tempSum > sum ? tempSum : sum;
	}
	return sum
};
