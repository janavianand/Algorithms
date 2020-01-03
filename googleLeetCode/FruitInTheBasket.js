var totalFruit = function(tree) {
    let total = 0;
    let tempSum = 0;
    let hash = {}
    let count = 0
    for(let i=0;i<tree.length;i++){
        if(hash[tree[i]] === undefined && count < 2){
            hash[tree[i]] = i;
            count += 1
            tempSum += 1
        }else if(hash[tree[i]] === undefined && count === 2){
            let newIndex = Math.min(...Object.values(hash))+1
            total = tempSum>total?tempSum:total
            tempSum = i - newIndex+1
            let value = hash[tree[i-1]]
            hash = {}
            hash[tree[i-1]] = value;
            hash[tree[i]] = i
        }else{
            hash[tree[i]] = i;
            tempSum += 1;
        }
    }
    total = tempSum>total?tempSum:total
    return total
};
