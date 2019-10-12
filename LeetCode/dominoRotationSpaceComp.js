/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var minDominoRotations = function(A, B) {
    if(A.length < 2) return 0
    let map = new Map()

    for(let i=0;i<A.length;i++){
        if(!map.has(A[i])){
            map.set(A[i],{A:0,ind:new Set(),B:0})
        }
        if(!map.has(B[i])){
            map.set(B[i],{B:0,ind:new Set(),A:0})
        }
        let val = map.get(A[i])
        val.ind.add(i)
        val.A = val.A + 1
        map.set(A[i],val)

        val = map.get(B[i])
        val.ind.add(i)
        val.B = val.B + 1
        if(val.ind.size === A.length){
            return val.A > val.B ? A.length - val.A : A.length - val.B
        }
        map.set(B[i],val)

        let newVal = map.get(A[i])
        if(newVal.ind.size === A.length){
            return newVal.A > newVal.B ? A.length - newVal.A : A.length - newVal.B
        }
        newVal = null
        newVal = map.get(B[i])
        if(newVal.ind.size === A.length){
            return newVal.A > newVal.B ? A.length - newVal.A : A.length - val.B
        }
    }
    return -1
};
