/*

There are 2N people a company is planning to interview. The cost of flying the i-th person to city A is costs[i][0], and the cost of flying the i-th person to city B is costs[i][1].

Return the minimum cost to fly every person to a city such that exactly N people arrive in each city.



Example 1:

Input: [[10,20],[30,200],[400,50],[30,20]]
Output: 110
Explanation:
The first person goes to city A for a cost of 10.
The second person goes to city A for a cost of 30.
The third person goes to city B for a cost of 50.
The fourth person goes to city B for a cost of 20.

The total minimum cost is 10 + 30 + 50 + 20 = 110 to have half the people interviewing in each city.

*/

/* Algo

1. sort city by gain. So now we will have the sorted order with minimum gain to max gain

ex : [[10,20],[30,200],[400,50],[30,20]]

then after sort we will have [[[30,200],[10,20],[30,20],[400,50]]]

2. Now send the first half to the company A and second half to company B

 */

var twoCitySchedCost = function(costs) {
    costs.sort((a,b)=>(a[0]-a[1])-(b[0]-b[1]))

    const halfLen = costs.length/2
    let total = 0
    for(let i=0;i<halfLen;i++){
        total += costs[i][0] + costs[i+halfLen][1]
    }
    return total
};
