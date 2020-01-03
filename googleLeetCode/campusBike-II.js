/**
 * @param {number[][]} workers
 * @param {number[][]} bikes
 * @return {number}
 */
var assignBikes = function(workers, bikes) {
    let result = Infinity;
    let visited = {};
    result = dfs(workers,bikes,result,visited,0,0)
    return result
};

function distanceCalc(pt1,pt2){
    return Math.abs(pt1[0]-pt2[0])+Math.abs(pt1[1]-pt2[1])
}

function dfs(workers,bikes,result,visited,workerPointer,distance){

    if(workerPointer === workers.length){
        result = Math.min(result,distance)
        return result
    }

    for(let i=0;i<bikes.length;i++){

        if(visited[i]){
            continue;
        }

        visited[i] = true

        let currDistance = distanceCalc(workers[workerPointer],bikes[i])

        result = dfs(workers,bikes,result,visited,workerPointer+1,distance+currDistance);

        visited[i] = false

    }

    return result
}
