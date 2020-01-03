var merge = function(intervals) {

    if(!intervals.length) return intervals

    if(intervals.length === 1) return intervals

    let sortedIntervals = intervals.sort((a,b)=>a[0]-b[0])

    let start = intervals[0][0]
    let end = intervals[0][1]

    let result = [intervals[0]]

    for(let i=1;i<sortedIntervals.length;i++){

        if(end<sortedIntervals[i][0]){
            result.push(sortedIntervals[i])
            start = sortedIntervals[i][0]
            end = sortedIntervals[i][1]
        }else{
            result.pop()
            end = end>sortedIntervals[i][1] ? end : sortedIntervals[i][1]
            result.push([start,end])
        }
    }
    return result
};
