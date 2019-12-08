var numSubmatrixSumTarget = function(matrix, target) {
    if(!matrix.length){
        return 0
    }
    let rowLimit = matrix.length
    let colLimit = matrix[0].length
    let count = 0
    for(let left=0;left<colLimit;left++){
        let cache = new Array(rowLimit).fill(0)
        for(let right = left;right<colLimit;right++){
            for(let index=0;index<rowLimit;index++){
                cache[index]+=matrix[index][right]
            }
            for(let leftcache=0;leftcache<rowLimit;leftcache++){
                let tempSum = 0
                for(let rightcache=leftcache;rightcache<rowLimit;rightcache++){
                    tempSum += cache[rightcache]
                    if(tempSum === target){
                        count += 1;
                        console.log(count)
                    }
                }
            }
        }
    }
    return count
};
