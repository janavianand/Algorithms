
/* Given n points on a 2D plane, find the maximum number of points that lie on the same straight line.
Example 1:
Input: [[1,1],[2,2],[3,3]]
Output: 3
Explanation:
^
|
|        o
|     o
|  o
+------------->
0  1  2  3  4
Example 2:
Input: [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]
Output: 4
Explanation:
^
|
|  o
|     o        o
|        o
|  o        o
+------------------->
0  1  2  3  4  5  6
NOTE: input types have been changed on April 15, 2019. Please reset to default code definition to get new method signature.
Link - https://leetcode.com/problems/max-points-on-a-line/
solution - https://leetcode.com/problems/max-points-on-a-line/discuss/431375/JavaScript-Solution
*/
/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    if(!points.length){
        return 0
    }
    let maxPoints = 1
    for(let i=0;i<points.length-1;i++){
        let dup = 1
        let pointsMap = new Map()
        let [x0,y0] = points[i]
        for(let j=i+1;j<points.length;j++){
            let [x1,y1] = points[j]
            if(x1===x0 && y1===y0){
                dup += 1
            }else{
                let slope = findSlope(x0,y0,x1,y1)
                slope = slope === -Infinity ? Infinity : slope
                pointsMap.set(slope,pointsMap.get(slope)+1 || 1)
            }
        }
        let maxSlope = 0
        for(let [slope,count] of pointsMap){
            maxSlope = Math.max(count,maxSlope)
        }
        maxSlope += dup
        maxPoints = Math.max(maxPoints,maxSlope)
    }
    return maxPoints
};
function findSlope(x0,y0,x1,y1){
    return (x1-x0)/(y1-y0)
}

