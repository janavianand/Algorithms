var shortestWay = function(source, target) { //'abc' //'abcbc'

    let prevPointer = Infinity;
    let currentPointer = 0

    let counter = 0;

    while(prevPointer !== currentPointer){
        prevPointer = currentPointer
        counter += 1
        for(let i=0;i<source.length;i++){

            if(source[i] === target[currentPointer]){
                currentPointer += 1
            }

            if(currentPointer === target.length){
                return counter
            }
        }
    }
    return -1
};

