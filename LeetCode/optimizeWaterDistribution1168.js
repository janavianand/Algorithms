var minCostToSupplyWater = function(n, wells, pipes) {
    let houseSet = new DisjointSet()
    let totalCost = 0
    for(let house=0;house<=n;house++){
        houseSet.addNode(house,house)
    }
    for(let wellIndex = 0;wellIndex<wells.length;wellIndex++){
        let edge = [0,wellIndex+1,wells[wellIndex]]
        houseSet.addEdge(edge)
    }
    for(let pipeIndex=0;pipeIndex<pipes.length;pipeIndex++){
        houseSet.addEdge(pipes[pipeIndex])
    }
    houseSet.edges.sort((house1,house2)=>house1[2]-house2[2])
    houseSet.edges.forEach((edge)=>{
        let rootOfHouse1 = houseSet.find(edge[0])
        let rootOfHouse2 = houseSet.find(edge[1])
        if(rootOfHouse1 !== rootOfHouse2){
            totalCost += edge[2]
            houseSet.makeRoot(rootOfHouse1,rootOfHouse2)
        }
    })
    return totalCost
};
class DisjointSet{
    constructor(){
        this.map = new Map()
        this.edges = []
    }
    addNode(node){
        this.map.set(node,node)
    }
    addEdge(edge){
        this.edges.push(edge)
    }
    find(node){
        if(node !== this.map.get(node)){
            node = this.find(this.map.get(node))
        }
        return node
    }
    makeRoot(node,root){
        this.map.set(node,root)
    }
}
