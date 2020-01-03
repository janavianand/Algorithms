/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    people.sort((a,b)=>a-b)

    let boats = 0

    let start = 0
    let end = people.length-1

    while(start<=end){
        if(people[start]+people[end] <= limit){
            start += 1
            end -=1
        }else{
            end -=1
        }
        boats += 1
    }
    return boats
};
