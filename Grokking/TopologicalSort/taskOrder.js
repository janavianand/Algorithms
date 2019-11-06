
class Graph{
  constructor(){
    this.graph = {}
  }
  addNode(node){
    this.graph[node] = []
  }addChild(node,child){
    this.graph[node].push(child)
  }
}

const is_scheduling_possible = function(tasks, prerequisites) {
  if(tasks <=0){
    return false
  }
  const topo = new Graph();

  for(let i=0;i<tasks;i++){
    topo.addNode(i)
  }
  const connections = prerequisites.length
  let deg = new Array(tasks).fill(0)

  for(let edge = 0;edge<connections;edge++){
    let parent = prerequisites[edge][0]
    let child = prerequisites[edge][1]

    topo.addChild(parent,child)
    deg[child] += 1
  }

  let queue = []

  for(let i=0;i<tasks;i++){
    if(deg[i] === 0){
      queue.push(i)
    }
  }
  let count = 0
  while(queue.length){
    let vertex = queue.shift()
    count += 1

    topo.graph[vertex].forEach(child=>{
      deg[child] -= 1
      if(deg[child]===0){
        queue.push(child)
      }
    })

  }

  return tasks === count;
};


console.log(`Is scheduling possible: ${is_scheduling_possible(3, [[0, 1], [1, 2]])}`)
console.log(`Is scheduling possible: ${is_scheduling_possible(3, [[0, 1], [1, 2], [2, 0]])}`)
console.log(`Is scheduling possible: ${is_scheduling_possible(6, [[0, 4], [1, 4], [3, 2], [1, 3]])}`)
