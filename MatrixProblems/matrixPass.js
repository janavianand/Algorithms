/* Given mxn matrix of integers whose each cell can contain a negative,zero or positive value, determine the minimum number of passes required to convert all negative values in teh matrix to positive.*/


/* Only a non-zero positive value at cell (i,j) can convert negative values present at its adjacent cells */

// Refer image.png

function minMatrixPass(matrix){
  let queue = []
  for(let i=0;i<matrix.length;i++){
    for(let j=0;j<matrix[i].length;j++){
      if(matrix[i][j]>0){
        queue.push([i,j])
      }
    }
  }
  let pass = passes(matrix,queue)
  let flag = true;
  for(let i=0;i<matrix.length;i++){
    for(let j=0;j<matrix[i].length;j++){
      if(matrix[i][j]<0){
        flag = false
      }
    }
  }
  return flag === true ? pass : false
}


function passes(matrix,queue,pass=0){
  let newQueue = []
  pass += 1

  while(queue.length){
    let temp = queue.shift();
    for(let i=1;i<3;i++){
      if((temp[0]+i)< matrix.length && matrix[temp[0]+i][temp[1]]<0){
        matrix[temp[0]+i][temp[1]] = Math.abs(matrix[temp[0]+i][temp[1]])
        newQueue.push([temp[0]+i,temp[1]])
      }
      if((temp[0]-i)>=0 && matrix[temp[0]-i][temp[1]]<0){
        matrix[temp[0]-i][temp[1]] = Math.abs(matrix[temp[0]-i][temp[1]])
        newQueue.push([temp[0]-i,temp[1]])
      }
      if((temp[0]+i)< matrix[0].length && matrix[temp[0]][temp[1]+i]<0){
        matrix[temp[0]][temp[1]+i] = Math.abs(matrix[temp[0]][temp[1]+i])
        newQueue.push([temp[0],temp[1]+i])
      }
      if((temp[1]-i)>=0 && matrix[temp[0]][temp[1]-i]<0){
        matrix[temp[0]][temp[1]-i] = Math.abs(matrix[temp[0]][temp[1]-i])
        newQueue.push([temp[0],temp[1]-i])
      }
    }
  }
  if(newQueue.length){
    return passes(matrix,newQueue,pass)
  }
  return pass
}

let matrix = [[-1,-9,0,-1,0],[-8,-3,-2,9,-7],[2,0,0,-6,0],[0,-7,-3,5,-4]]

console.log(`result:${minMatrixPass(matrix)}`)
