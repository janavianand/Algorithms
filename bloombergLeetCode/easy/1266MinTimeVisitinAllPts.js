/*
1266. Minimum Time Visiting All Points

https://leetcode.com/problems/minimum-time-visiting-all-points/

On a plane there are n points with integer coordinates points[i] = [xi, yi]. Your task is to find the minimum time in seconds to visit all points.

You can move according to the next rules:

In one second always you can either move vertically, horizontally by one unit or diagonally (it means to move one unit vertically and one unit horizontally in one second).
You have to visit the points in the same order as they appear in the array.

Input: points = [[1,1],[3,4],[-1,0]]
Output: 7
Explanation: One optimal path is [1,1] -> [2,2] -> [3,3] -> [3,4] -> [2,3] -> [1,2] -> [0,1] -> [-1,0]
Time from [1,1] to [3,4] = 3 seconds
Time from [3,4] to [-1,0] = 4 seconds
Total time = 7 seconds

*/

/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
  if(!points || points.length <2){
      return 0
  }

  let totalTime = 0

  for(let i=0;i<points.length-1;i++){
      let startX = points[i][0]
      let startY = points[i][1]

      let endX = points[i+1][0]
      let endY = points[i+1][1]

      let timeX = Math.abs(endX-startX)
      let timeY = Math.abs(endY-startY)

      totalTime += timeX > timeY ? timeX : timeY
  }
  return totalTime
};
