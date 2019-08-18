//Campus-Bikes

var assignBikes = function(workers, bikes) {
    let distArr = []
    let workStat = []
    let bikeStat = []
    let res = []

    for(let i=0;i<workers.length;i++){
        for(let j=0;j<bikes.length;j++){
            let dist = distance(workers[i],bikes[j])

            if(!distArr[dist]){
                distArr[dist] = []
            }

            distArr[dist].push([i,j])
        }
    }

    for(let i=0;i<distArr.length;i++){
        if(distArr[i] !== undefined){

            for(let g=0;g<distArr[i].length;g++){

                let temp = distArr[i][g]
                let workerIndex = temp[0]
                let bikeIndex = temp[1]

                if(!workStat[workerIndex] && !bikeStat[bikeIndex] ){
                    res[workerIndex] = bikeIndex
                    workStat[workerIndex] = true;
                    bikeStat[bikeIndex] = true;
                }
            }
        }
    }
    return res
};

function distance(pt1,pt2){
    return Math.abs(pt1[0]-pt2[0])+Math.abs(pt1[1]-pt2[1])
}

