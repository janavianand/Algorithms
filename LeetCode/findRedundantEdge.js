var findRedundantConnection = function(edges) {
    let arr = []
    let result = []
    for(let i=0;i<=edges.length;i++){
        arr[i] = i
    }
    for(let i=0;i<edges.length;i++){
        let [a,b] = edges[i]
        union(a,b,arr,result)
    }
    return result
};

function find(index,arr){
    while(index!==arr[index]){
        index = arr[arr[index]]
    }
    return index
}

function union(A,B,arr,result){
    let rootA = find(A,arr)
    let rootB = find(B,arr)

    if(rootA === rootB){
        result.push(A,B)
    }

    arr[rootA] = rootB
}
