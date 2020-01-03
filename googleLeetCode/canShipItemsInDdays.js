/**
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 */
var shipWithinDays = function(weights, D) {
    if(!weights.length || !D) return 0
    let maxTotal = weights.reduce((a,b)=>a+b)
    if(D===1 ) return maxTotal
    let minTotal = Math.max(...weights)

    while(maxTotal > minTotal){
        let mid = Math.floor((maxTotal+minTotal)/2)
        let currDay = 1
        let subTotal = 0
        let pointer = 0

        while(pointer < weights.length){
            if((subTotal+weights[pointer]) > mid){
                currDay += 1
                subTotal = weights[pointer]
            }else{
                subTotal += weights[pointer]
            }

            pointer+=1
        }
        if(currDay > D){
                minTotal = mid+1
            }else{
                maxTotal = mid
            }
    }
    return minTotal
};
