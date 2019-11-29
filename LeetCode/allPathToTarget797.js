/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    if(!graph.length) {
        return []
    }
    return getPath(graph,0,[],[])
};

function getPath(graph,node,result,path){
    path.push(node)
    if(graph[node].length){
        graph[node].forEach(child=>{
            getPath(graph,child,result,[...path])
        })
    }else{
        result.push([...path])
    }
    return result
}
