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
    let sumMatrix = interMatrix(this.matrix)
    //console.log(sumMatrix)
    let total = 0
    for(let row = row1; row<=row2;row++){
        total+= sumMatrix[row][col2+1] - sumMatrix[row][col1]
    }
    return total
};

function interMatrix(matrix){
    if(!matrix.length || !matrix[0].length) return;

    let temp = [...new Array(matrix.length)].map(() => new Array(matrix[0].length).fill(0));
    for(let i=0;i<matrix.length;i++){
        let trow = []
        for(let k=0;k<matrix[i].length;k++){
            trow.push(0)
        }
        temp.push(trow)
    }
    for(let row =0;row<matrix.length;row++){
        for(let col=0;col<matrix[row].length;col++){
            temp[row][col+1] = temp[row][col]+matrix[row][col]
        }
    }
    return temp
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)


 */
