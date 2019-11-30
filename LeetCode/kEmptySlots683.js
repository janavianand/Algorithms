/**
 * @param {number[]} bulbs
 * @param {number} K
 * @return {number}
 */
var kEmptySlots = function(bulbs, K) {
    bulbs = bulbs.reduce((s, v, i) => {
        s[v - 1] = i + 1;
        return s;
    }, new Array(bulbs.length));
    let initial = 0
    let window = initial+K+1
    let min = Infinity
    let upper = Math.max(bulbs[initial],bulbs[window])

    while(window < bulbs.length){
        initial+=1
        if(initial === window){
            min = Math.min(min,upper)
            window = initial+K+1
            upper = Math.max(bulbs[initial],bulbs[window])
        }else if(bulbs[initial] < upper){
            window = initial+K+1
            upper = Math.max(bulbs[initial],bulbs[window])
        }
    }
    return min < bulbs.length ? min : -1
};

