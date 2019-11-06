/**
 * @param {number[]} sweetness
 * @param {number} K
 * @return {number}
 */
var maximizeSweetness = function(sweetness, K) {
    let min = 0
    let max = sweetness.reduce((a,b)=>a+b)
    if(K === 0){
        return max
    }
    max /= K

    while(min<max){
        let mid = min+(max-min)/2
        let temp = 0
        let cut = 0
        for(let i=0;i<sweetness.length;i++){
            temp += sweetness[i]
            if(temp>mid){
                cut += 1
                temp = 0
            }
            if(cut > K){
                break
            }
        }
        if(cut > K){
            min = mid+1
        }else{
            max = mid
        }
    }
    return max
};
