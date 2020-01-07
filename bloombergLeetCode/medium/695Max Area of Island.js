/*

Given a non-empty 2D array grid of 0's and 1's, an island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

Find the maximum area of an island in the given 2D array. (If there is no island, the maximum area is 0.)

Example 1:

[[0,0,1,0,0,0,0,1,0,0,0,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,1,1,0,1,0,0,0,0,0,0,0,0],
 [0,1,0,0,1,1,0,0,1,0,1,0,0],
 [0,1,0,0,1,1,0,0,1,1,1,0,0],
 [0,0,0,0,0,0,0,0,0,0,1,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,0,0,0,0,0,0,1,1,0,0,0,0]]
Given the above grid, return 6. Note the answer is not 11, because the island must be connected 4-directionally.
Example 2:

[[0,0,0,0,0,0,0,0]]
Given the above grid, return 0.
Note: The length of each dimension in the given grid does not exceed 50.

Link - https://leetcode.com/problems/max-area-of-island/
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    if(!grid.length){
        return 0
    }
    let maxArea = 0
    for(let row=0;row<grid.length;row++){
        for(let col = 0;col<grid[row].length;col++){
            let cache = {}
            if(grid[row][col] === 1){
                let area = dfs(grid,cache,row,col)
                maxArea = Math.max(area,maxArea)
            }
        }
    }
    return maxArea
};

function dfs(grid,cache,row,col){
    if(!isValid(row,col,grid)){
        return 0
    }
    if(grid[row][col] === 0){
        return 0
    }
    grid[row][col] = 0
    return dfs(grid,cache,row+1,col)+dfs(grid,cache,row,col+1)+dfs(grid,cache,row-1,col)+dfs(grid,cache,row,col-1)+1
}

function isValid(row,col,grid){
    if(row < 0 || row >= grid.length|| col<0 || col >= grid[row].length){
        return false
    }
    return true
}
