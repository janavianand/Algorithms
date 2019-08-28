/**
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function(stones) {
    let stonesSet = new Set();

    for(let i=0;i<stones.length;i++){
        stonesSet.add(stones[i][0]);
        stonesSet.add(~stones[i][1]);
    }

    let result = stonesSet.size;

    let root = []

    stonesSet.forEach((stone)=>{
        root[stone] = stone
    })

    stones.forEach((stone)=>{

        let root1 = findRoot(stone[0], root);
        let root2 = findRoot(~stone[1], root);

        if(root1 !== root2){
            root[root1] = root2
            result -= 1
        }
    });

    return stones.length - result
};

function findRoot(node,root){
    while(root[node] !== root[root[node]]){
        node = root[root[node]]
    }
    return root[node]
}
