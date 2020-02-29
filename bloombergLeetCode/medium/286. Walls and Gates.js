

/*

You are given a m x n 2D grid initialized with these three possible values.

-1 - A wall or an obstacle.
0 - A gate.
INF - Infinity means an empty room. We use the value 231 - 1 = 2147483647 to represent INF as you may assume that the distance to a gate is less than 2147483647.
Fill each empty room with the distance to its nearest gate. If it is impossible to reach a gate, it should be filled with INF.

Example:

Given the 2D grid:

INF  -1  0  INF
INF INF INF  -1
INF  -1 INF  -1
  0  -1 INF INF
After running your function, the 2D grid should be:

  3  -1   0   1
  2   2   1  -1
  1  -1   2  -1
  0  -1   3   4


  Link - https://leetcode.com/problems/walls-and-gates/

  solution - https://leetcode.com/problems/walls-and-gates/solution/
*/

  /**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function(rooms) {
    if(!rooms.length){
        return []
    }

    let queue = []
    let dir = [[1,0],[-1,0],[0,1],[0,-1]]

    for(let row=0;row<rooms.length;row++){
        for(let col=0;col<rooms[0].length;col++){
            if(rooms[row][col] === 0){
                queue.push([row,col]);
            }
        }
    }
    while(queue.length){
        let [row,col] = queue.shift()

        for(let [incRow,incCol] of dir){
            let finRow = row+incRow
            let finCol = col+incCol

            if(!isValid(rooms,finRow,finCol)){
                continue
            }

            if(rooms[finRow][finCol] > rooms[row][col]+1){
                rooms[finRow][finCol] = rooms[row][col]+1

                queue.push([finRow,finCol])
            }
        }
    }
};


function isValid(rooms,row,col){
    if(row>=0 && col>=0 && row<rooms.length && col<rooms[0].length && rooms[row][col] !== 0 && rooms[row][col] !== -1){
        return true
    }
    return false
}
