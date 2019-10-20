/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    this.matrix = matrix
    this.cache = matrixCreate(matrix)
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    if(!this.matrix.length || !this.matrix[0].length) return 0;

    return this.cache[row2+1][col2+1] - this.cache[row2+1][col1] - this.cache[row1][col2+1] + this.cache[row1][col1]
};

function matrixCreate(matrix){
    if(!matrix.length || !matrix[0].length) return 0;

    let cache = []

    for(let i=0;i<matrix.length+1;i++){
        let trow = []
        for(let k=0;k<matrix[0].length+1;k++){
            trow.push(0)
        }
        cache.push(trow)
    }

    for(let i=0;i<matrix.length;i++){
        for(let k=0;k<matrix[0].length;k++){
            cache[i+1][k+1] = matrix[i][k] + cache[i+1][k] + cache[i][k+1] - cache[i][k]
        }
    }

    return cache
}


/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)


 */
