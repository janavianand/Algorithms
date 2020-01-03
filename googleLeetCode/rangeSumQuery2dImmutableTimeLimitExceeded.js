/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    this.matrix = matrix
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    if(row1 < 0 || col1<0 || row2 >= this.matrix.length || col2 >= this.matrix[0].length) return 0
    return dfs(this.matrix,row1,col1,row2,col2,0,{})
};

function dfs(matrix,rindex,cindex,rlimit,climit,sum,visited){
    if(rindex > rlimit || cindex > climit || visited[`${rindex}${cindex}`]){
        return sum
    }

        visited[`${rindex}${cindex}`] = true
        sum += matrix[rindex][cindex] + dfs(matrix,rindex+1,cindex,rlimit,climit,sum,visited) + dfs(matrix,rindex,cindex+1,rlimit,climit,sum,visited)

    return sum
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)


 */
