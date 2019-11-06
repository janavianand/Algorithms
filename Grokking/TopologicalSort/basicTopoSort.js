
class Graph{
  constructor(){
    this.graph = {}
  }
  insert(node,child){
    this.graph[node] = this.graph[node] || []
    this.graph[node].push(child)
  }
}

const topological_sort = function(vertices, edges) {
  let sortedOrder = [];
  if(vertices <= 0){
    return sortedOrder
  }
  let topo = new Graph()
  let inDeg = new Array(vertices).fill(0)

  for(let i=0;i<edges.length;i++){
    topo.insert(edges[i][0],edges[i][1])
    inDeg[edges[i][1]] += 1
  }
  let queue = []
  for(let i=0;i<vertices;i++){
    if(inDeg[i]===0){
      queue.push(i)
    }
  }
  while(queue.length !== 0){
    let vertex = queue.shift();
    sortedOrder.push(vertex)
    if(topo.graph[vertex]){
      topo.graph[vertex].forEach(child=>{
        inDeg[child] -= 1
        if(inDeg[child] === 0){
          queue.push(child)
        }
      })
    }
  }

  if(sortedOrder.length !== vertices){
    return []
  }
  return sortedOrder;
};


console.log(`Topological sort: ${topological_sort(4, [[3, 2], [3, 0], [2, 0], [2, 1]])}`)
console.log(`Topological sort: ${topological_sort(5, [[4, 2], [4, 3], [2, 0], [2, 1], [3, 1]])}`)
console.log(`Topological sort: ${topological_sort(7, [[6, 4], [6, 2], [5, 3], [5, 4], [3, 0], [3, 1], [3, 2], [4, 1]])}`)
