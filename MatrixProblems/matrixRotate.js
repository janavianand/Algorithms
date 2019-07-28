// Matrix one rotation

function matrixRotate(matrix){
  let newMatrix = []
  let count = 0
  for(let i=0;i<matrix.length;i++){
    for(let j=0;j<matrix[i].length;j++){
      if(count<matrix[i].length){
        newMatrix.push([])
        count += 1
      }
      newMatrix[j][i] = matrix[i][j]
    }
  }
  return newMatrix
}

let matrix = [[1,2,3],[4,5,6],[7,8,9],[10,11,12]]

console.log(matrixRotate(matrix))
