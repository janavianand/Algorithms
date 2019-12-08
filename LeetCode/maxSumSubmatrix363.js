var maxSumSubmatrix = function(matrix, k) {
    if(!matrix.length){
        return -1
    }
    let maxSum = -Infinity
    // let maxLeft = 0
    // let maxRight = 0
    // let maxUp = 0
    // let maxDown = 0
    let rowLimit = matrix.length
    let colLimit = matrix[0].length
    for(let left = 0;left<rowLimit;left++){
        let cache = new Array(rowLimit).fill(0)
        for(let right = left;right<colLimit;right++){
            //console.log(cache)
            for(let cachePointer = 0;cachePointer<rowLimit;cachePointer++){
                cache[cachePointer] += matrix[cachePointer][right]
            }
            for(let cacheleft=0;cacheleft<rowLimit;cacheleft++){
                let tempSum = 0
                for(let cacheright=cacheleft;cacheright<rowLimit;cacheright++){
                    tempSum += cache[cacheright]
                    if(tempSum > maxSum && tempSum <= k){
                        maxSum = tempSum
                        // maxLeft = left
                        // maxRight = right
                        // maxUp = cacheleft
                        // maxDown = cacheright
                    }
                }
            }
        }
    }
  return maxSum === -Infinity ? -1 : maxSum
};
