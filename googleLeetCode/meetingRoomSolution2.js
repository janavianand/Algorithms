var minMeetingRooms = function(intervals) {

    if(!intervals.length) return 0

    if(intervals.length === 1) return 1

    let startIntervals = []
    let endIntervals = []
    let meetingRooms = 0

    for(let i=0;i<intervals.length;i++){
        startIntervals[i] = intervals[i][0]
        endIntervals[i] = intervals[i][1]
    }

    startIntervals = startIntervals.sort((a,b)=>a-b)
    endIntervals = endIntervals.sort((a,b)=>a-b)

    let start = 0
    let end = 0

    while(start < startIntervals.length && end < endIntervals.length){
        if(startIntervals[start] < endIntervals[end]){
            meetingRooms += 1
            start += 1
        }else{
            start += 1
            end += 1
        }
    }

    return meetingRooms
};
