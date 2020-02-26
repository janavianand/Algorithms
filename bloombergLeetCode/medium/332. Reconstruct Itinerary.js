/*


Given a list of airline tickets represented by pairs of departure and arrival airports [from, to], reconstruct the itinerary in order. All of the tickets belong to a man who departs from JFK. Thus, the itinerary must begin with JFK.
Note:
If there are multiple valid itineraries, you should return the itinerary that has the smallest lexical order when read as a single string. For example, the itinerary ["JFK", "LGA"] has a smaller lexical order than ["JFK", "LGB"].
All airports are represented by three capital letters (IATA code).
You may assume all tickets form at least one valid itinerary.
Example 1:
Input: [["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]
Output: ["JFK", "MUC", "LHR", "SFO", "SJC"]
Example 2:
Input: [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
Output: ["JFK","ATL","JFK","SFO","ATL","SFO"]
Explanation: Another possible reconstruction is ["JFK","SFO","ATL","JFK","ATL","SFO"].
             But it is larger in lexical order.
Link - https://leetcode.com/problems/reconstruct-itinerary/
Solution - https://leetcode.com/problems/reconstruct-itinerary/discuss/419576/Java-Script-Solution
*/
/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
    if(!tickets.length){
        return tickets
    }
    let itenary = {}
    let result = []
    for(let [from,to] of tickets){
        itenary[from] = itenary[from] || []
        itenary[to] = itenary[to] || []
        itenary[from].push(to)
    }
    for(let key in itenary){
        itenary[key].sort()
    }
    dfs(itenary,result,'JFK')
    return result
};
function dfs(graph,result,from){
    let places = graph[from]
    while(places.length){
        let place = places.shift()
        dfs(graph,result,place)
    }
    result.unshift(from)
}
