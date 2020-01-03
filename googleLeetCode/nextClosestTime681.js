/**
 * @param {string} time
 * @return {string}
 */

var nextClosestTime = function(time) {
    let colonIndex = time.indexOf(':')
    let timeArr = (time.substring(0,colonIndex)+time.substring(colonIndex+1,time.length)).split('')
    timeArr = timeArr.map(str=>parseInt(str))
    let [h1,h2,m1,m2] = dfs(timeArr,[],null)
    return `${h1}${h2}:${m1}${m2}`
};


const isValidTime = (selected) => {
  if (selected[0] > 2) {
    return false;
  }
  if (selected[0] === 2 && selected[1] > 4) {
    return false;
  }
  if (selected[2] > 5) {
    return false;
  }
  return true;
};

function convertSeconds(timeArr){
    if(!timeArr){
        return Infinity
    }
    return (timeArr[0]*10+timeArr[1])*60+timeArr[2]*10+timeArr[3]
}

function minDiff(time1,time2){
    let diff = time1-time2
    return diff > 0 ? diff : diff+24*60
}

function dfs(timeArr,selected,result){
    if(selected.length >= 4){
        let time1 = convertSeconds(timeArr)
        let time2 = convertSeconds(selected)
        let time3 = convertSeconds(result)
        return minDiff(time2,time1) < minDiff(time3,time1) ? [...selected] : [...result]
    }
    if(!isValidTime(selected)){
        return result
    }

    for(let i=0;i<timeArr.length;i++){
        selected.push(timeArr[i])
        result = dfs(timeArr,selected,result)
        selected.pop()
    }
    return result
}
