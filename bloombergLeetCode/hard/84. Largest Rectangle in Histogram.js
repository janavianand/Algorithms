
/*
Given n non-negative integers representing the histogram's bar height where the width of each bar is 1, find the area of largest rectangle in the histogram.
Above is a histogram where width of each bar is 1, given height = [2,1,5,6,2,3].
The largest rectangle is shown in the shaded area, which has area = 10 unit.
Example:
Input: [2,1,5,6,2,3]
Output: 10
Link - https://leetcode.com/problems/largest-rectangle-in-histogram/
Solution - https://leetcode.com/problems/largest-rectangle-in-histogram/discuss/29022/Javascript-solution
*/
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    if(!heights.length){
        return 0
    }
    if(heights.length === 1){
        return heights[0]
    }
    let stack = []
    let maxArea = 0
    for(let i=0;i<=heights.length;i++){
        let elem = i===heights.length ? -1 : heights[i]
        while(stack.length && elem < heights[stack[stack.length-1]]){
            let index = stack.pop()
            let height = heights[index]
            let width = stack.length === 0 ? i : i-stack[stack.length-1]-1
            maxArea = Math.max(maxArea,height*width)
        }
        stack.push(i)
    }
    return maxArea
};
