/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
    if(!matrix.length || ! matrix[0].length){
        return 0
    }
    let row = matrix.length
    let col = matrix[0].length
    let result = 1
    let cache = {}
    for(let i=0;i<row;i++){
        for(let k=0;k<col;k++){
            result = Math.max(result,allDirDfs(matrix,i,k,row,col,cache))
        }
    }
    return result
};

const direction = [[1,0],[0,1],[-1,0],[0,-1]]

function allDirDfs(matrix,i,j,row,col,cache){
    let key = createKey(col,i,j)
    if(cache[key]){
        return cache[key]
    }
    let max = 1
    for(let [x,y] of direction){
        let next_i = i+x;
        let next_j = j+y
        if(isValid(next_i,next_j,row,col) && matrix[i][j] < matrix[next_i][next_j]){
            max = Math.max(max,allDirDfs(matrix,next_i,next_j,row,col,cache)+1)
        }
    }
    cache[key] = max
    return cache[key]

}

function createKey(col,i,j){
    return col*i+j
}

function isValid(i,j,row,col){
    if(i<0 || i>=row || j< 0 || j>=col){
        return false
    }
    return true
}
