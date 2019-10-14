var verticalTraversal = function(root) {
    let hash = {}
    let queue = [[root,0,0]]

    while(queue.length){
        let node = queue.shift()

        if(hash[node[1]] === undefined) hash[node[1]] = {}

        if(hash[node[1]][[node[2]]] === undefined) hash[node[1]][node[2]] = []

        hash[node[1]][node[2]].push(node[0].val)

        if(node[0].left) queue.push([node[0].left,node[1]-1,node[2]-1])
        if(node[0].right) queue.push([node[0].right,node[1]+1,node[2]-1])
    }
    let sortedX = Object.keys(hash).sort((a,b)=>a-b)

    let result = []
    for(let value of sortedX){
        let temp = []
        for(let yval in hash[value]){
            if(hash[value][yval].length > 1){
                hash[value][yval].sort((a,b)=>a-b)
            }
            temp = temp.concat(hash[value][yval])
        }
        result.push(temp)
    }
    return result
};

