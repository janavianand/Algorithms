/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {

    if(A.length <= 2) return true

    let flag = null

    for(let i=0;i<A.length-1;i++){
        if(A[i] < A[i+1]){
            if(flag === null){
                flag = true
            }else if(flag === false){
                return flag
            }
        }else if(A[i] > A[i+1]){
            if(flag === null){
                flag = false
            }else if(flag === true){
                return false
            }
        }
    }
    return true
};
