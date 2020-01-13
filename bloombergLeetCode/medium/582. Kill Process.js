/*

Given n processes, each process has a unique PID (process id) and its PPID (parent process id).
Each process only has one parent process, but may have one or more children processes. This is just like a tree structure. Only one process has PPID that is 0, which means this process has no parent process. All the PIDs will be distinct positive integers.
We use two list of integers to represent a list of processes, where the first list contains PID for each process and the second list contains the corresponding PPID.
Now given the two lists, and a PID representing a process you want to kill, return a list of PIDs of processes that will be killed in the end. You should assume that when a process is killed, all its children processes will be killed. No order is required for the final answer.
Example 1:
Input:
pid =  [1, 3, 10, 5]
ppid = [3, 0, 5, 3]
kill = 5
Output: [5,10]
Explanation:
           3
         /   \
        1     5
             /
            10
Kill 5 will also kill 10.
Link - https://leetcode.com/problems/kill-process/
*/
/**
 * @param {number[]} pid
 * @param {number[]} ppid
 * @param {number} kill
 * @return {number[]}
 */
var killProcess = function(pid, ppid, kill) {
    if(!pid.length){
        return []
    }
    let pgraph = new Graph()
    for(let i=0;i<pid.length;i++){
        pgraph.addNode(ppid[i])
        pgraph.addChild(ppid[i],pid[i])
    }
    return pgraph.deleteNode(kill)
};
class Graph{
    constructor(){
        this.graph = {}
    }
    addNode(node){
        this.graph[node] = this.graph[node] || []
    }
    addChild(node,child){
        this.addNode(child)
        this.graph[node].push(child)
    }
    deleteNode(node){
        let deletedNode = this.graph[node]
        let childNodes = [...this.graph[node]]
        while(childNodes.length){
            let child = childNodes.shift()
            if(this.graph[child].length){
                deletedNode = deletedNode.concat([...this.graph[child]])
                childNodes = childNodes.concat([...this.graph[child]])
            }
        }
        return [node].concat(deletedNode)
    }
}
