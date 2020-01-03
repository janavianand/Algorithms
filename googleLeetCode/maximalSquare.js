/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {

    if(!matrix.length){
        return 0
    }

    let cache = new Array(matrix[0].length+1).fill(0)

    let squareSideLen = 0
    let next = 0
    for(let row=0;row<matrix.length;row++){
        for(let col=matrix[row].length-1;col>=0;col--){
            let temp = 0
            if(matrix[row][col] === '1'){
                cache[col+1] = cache[col+1] || 0
                matrix[row][col+1] = matrix[row][col+1] || 0
                temp = Math.min(next,cache[col+1],cache[col])+1
                squareSideLen = Math.max(temp,squareSideLen)
            }else{
                cache[col] = 0
            }
            next = cache[col]
            cache[col] = temp
        }
    }
    return squareSideLen ** 2
};
