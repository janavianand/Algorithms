/**
 * @param {number[][]} times
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
var networkDelayTime = function(times, N, K) {

    //create a graph with nodes mapping (MAP) to array of child and weight
    let graph = new Graph();

    for(let i=0;i<times.length;i++){
        graph.add(times[i][0],times[i][1],times[i][2])
    }

    // have a distance map and initiate all its value to max value ,infinity
    let distance = new Map()
    let seen = {};

    for(let node = 1; node<=N;node++){
        distance.set(node,Infinity);
    }
    //set the distance of the starting node to 0
    distance.set(K,0);

    while(true){
        let tempnode = null
        let tempdist = Infinity

        for(let i=1;i<=N;i++){
            //loop all the nodes
            // if its not seen , get the node from distance and compare it with tempdist
            //for loop 1, given below ex, node 2 is 0
            //hence tempdist =0 . and tempnode is 0
            if(!seen[i] && distance.get(i) < tempdist){
                tempdist = distance.get(i)
                tempnode = i
            }
        }
        // if nothing is set in tempnode, i.e, all nodes are seen, then exit the loop
        if(!tempnode) break;
        seen[tempnode] = true;
        if(graph.map.has(tempnode)){
            //get the children of the tempnode and loop over it
            for(let val of graph.map.get(tempnode)){
               //compare the existing weight in the distance with the current (weight+tempnode weight)
               //if the current weight+tempnode weight is greater we dont want to take that route. so keep the old value

                distance.set(val[0],Math.min(distance.get(val[0]),distance.get(tempnode)+val[1]))
            }
        }
    }

    let result = -Infinity;

    for(let elem of distance){
        if(elem[1] === Infinity) return -1
        result = Math.max(result,elem[1])
    }

    return result
};

class Graph{
    constructor(){
        this.map = new Map()
    }
    add(pnode,cnode,weight){
        if(!this.map.has(pnode)){
            this.map.set(pnode,[])
        }
        let element = this.map.get(pnode);
        element.push([cnode,weight])
        this.map.set(pnode,element)
    }
}

/*[[2,1,1],[2,3,1],[3,4,1]], N = 4, K = 2*/
