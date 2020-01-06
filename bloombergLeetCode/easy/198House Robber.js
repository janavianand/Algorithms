/*
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

Example 1:

Input: [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
             Total amount you can rob = 1 + 3 = 4.
Example 2:

Input: [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
             Total amount you can rob = 2 + 9 + 1 = 12.


Link - https://leetcode.com/problems/house-robber/

youtube - https://www.youtube.com/watch?v=xlvhyfcoQa4
*/

/*
A natural way to approach this problem is to work on the simplest case first.

Let us denote that:

f(k) = Largest amount that you can rob from the first k houses.
Ai = Amount of money at the ith house.

Let us look at the case n = 1, clearly f(1) = A1.

Now, let us look at n = 2, which f(2) = max(A1, A2).

For n = 3, you have basically the following two options:

Rob the third house, and add its amount to the first house's amount.

Do not rob the third house, and stick with the maximum amount of the first two houses.

Clearly, you would want to choose the larger of the two options at each step.

Therefore, we could summarize the formula as following:

f(k) = max(f(k – 2) + Ak, f(k – 1))

We choose the base case as f(–1) = f(0) = 0, which will greatly simplify our code as you can see.

The answer will be calculated as f(n). We could use an array to store and calculate the result, but since at each step you only need the previous two maximum values, two variables are suffice.

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(!nums.length){
        return 0
    }
    if(nums.length<3){
        return Math.max(...nums)
    }

    let dp = new Array(nums.length).fill(0)

    dp[0] = nums[0]
    dp[1] = Math.max(nums[0],nums[1])

    for(let i=2;i<nums.length;i++){
        dp[i] = Math.max(nums[i]+dp[i-2],dp[i-1])
    }

    return dp[dp.length-1]
};
