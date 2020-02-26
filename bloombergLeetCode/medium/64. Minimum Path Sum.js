/*

Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.
Note: You can only move either down or right at any point in time.
Example:
Input:
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
Output: 7
Explanation: Because the path 1→3→1→1→1 minimizes the sum.
Link - https://leetcode.com/problems/minimum-path-sum/

*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    if(!grid.length){
        return 0
    }
    let dp = new Array(grid[0].length).fill(0).map(elem=>0)
    for(let j=0;j<grid[0].length;j++){
        dp[j-1] = dp[j-1] || 0
        dp[j] = grid[0][j]+dp[j-1]
    }
    for(let i=1;i<grid.length;i++){
        for(let j=0;j<grid[i].length;j++){
            if(j===0){
                dp[j] = grid[i][j]+dp[j]
            }else{
                dp[j] = Math.min(grid[i][j]+dp[j],grid[i][j]+dp[j-1])
            }
        }
    }
    return dp[grid[0].length-1]
};
