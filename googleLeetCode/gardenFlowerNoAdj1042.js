/**
 * @param {number} N
 * @param {number[][]} paths
 * @return {number[]}
 */
var gardenNoAdj = function(N, paths) {
    let result = new Array(N).fill(0)
    let gardenMap = new Map()

    for(let i=1;i<=N;i++){
        gardenMap.set(i,new Graph(i))
    }

    for(let i=0;i<paths.length;i++){
        let node = paths[i][0]
        let neighbour = paths[i][1]

        gardenMap.get(node).connectGarden(gardenMap.get(neighbour))
        gardenMap.get(neighbour).connectGarden(gardenMap.get(node))

    }
    for(let [node,garden] of gardenMap){
         let flower = 1
         while(!garden.hasFlower()){
             if(garden.canSeed(flower)){
                garden.seed(flower)
                result[node] = flower
             }else{
                 flower++
             }
         }
    }
    result.shift()
    return result
};                                                                                                                                                                                                                     class Graph{
    constructor(node){
        this.node = node
        this.flower = null
        this.connectedGarden = []
    }
    connectGarden(neighbour){
        if(!this.connectedGarden.includes(neighbour)){
            this.connectedGarden.push(neighbour)
        }
    }
    canSeed(flower){
        return this.flower === null && this.connectedGarden.every(garden=>garden.flower !== flower)
    }
    seed(flower){
        this.flower = flower
    }
    hasFlower(){
        return this.flower !== null
    }
}
