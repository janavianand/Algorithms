

/*

Equations are given in the format A / B = k, where A and B are variables represented as strings, and k is a real number (floating point number). Given some queries, return the answers. If the answer does not exist, return -1.0.

Example:
Given a / b = 2.0, b / c = 3.0.
queries are: a / c = ?, b / a = ?, a / e = ?, a / a = ?, x / x = ? .
return [6.0, 0.5, -1.0, 1.0, -1.0 ].

The input is: vector<pair<string, string>> equations, vector<double>& values, vector<pair<string, string>> queries , where equations.size() == values.size(), and the values are positive. This represents the equations. Return vector<double>.

According to the example above:

equations = [ ["a", "b"], ["b", "c"] ],
values = [2.0, 3.0],
queries = [ ["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"] ].


The input is always valid. You may assume that evaluating the queries will result in no division by zero and there is no contradiction.

Link - https://leetcode.com/problems/evaluate-division/

*/

/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    let graph = new Graph()

    for(let i=0;i<equations.length;i++){
        graph.addNode(equations[i][0],equations[i][1],values[i])
    }
    let result = []
    for(let [node1,node2] of queries){
        if(graph.graph[node1] && node1 === node2){
            result.push(1)
            continue
        }
        let len = result.length
        dfs(graph.graph,node1,node2,{},result,1)
        len === result.length ? result.push(-1):null
    }
    return result
};

function dfs(graph,node,target,visited,result,tweight){
    if(!visited[node]){
        visited[node] = true
        if(graph[node]){
            let children = graph[node]
            for(let [child,weight] of children){
                if(child === target){
                    result.push(tweight*weight)
                    return
                }
                dfs(graph,child,target,visited,result,tweight*weight)
            }
        }
    }
}

class Graph{
    constructor(){
        this.graph = {}
    }
    addNode(node1,node2,weight){

        this.graph[node1] = this.graph[node1] || []
        this.graph[node2] = this.graph[node2] || []
        this.graph[node1].push([node2,weight])
        this.graph[node2].push([node1,1/weight])

    }
}
