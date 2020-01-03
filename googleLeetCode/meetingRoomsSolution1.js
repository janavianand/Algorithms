var minMeetingRooms = function(intervals) {

    if(!intervals.length) return 0

    if(intervals.length === 1) return 1

    let sortedIntervals = intervals.sort((a,b)=>a[0]-b[0])

    let arr = [sortedIntervals[0][1]]

    for(let i=1;i<sortedIntervals.length;i++){
        if(arr[arr.length-1] > sortedIntervals[i][0]){
            arr.push(sortedIntervals[i][1])
            if(arr[0] <= sortedIntervals[i][0]){
                arr.shift()
            }
        }else{
            arr.pop()
            arr.push(sortedIntervals[i][1])
        }
        arr.sort((a,b)=>a-b)
    }
    return arr.length
};
