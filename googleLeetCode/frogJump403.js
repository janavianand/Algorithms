/**
 * @param {number[]} stones
 * @return {boolean}
 */
var canCross = function(stones) {
    let hash ={}
    for(let i=0;i<stones.length;i++){
        if(i>3 && (stones[i]> stones[i-1] * 2)){
            return false
        }else{
            hash[stones[i]] = true
        }
    }

    let positionStack = [0]
    let jumpStack = [0]

    let lastStone = stones[stones.length-1]

    while(positionStack.length !== 0){
        let position = positionStack.pop()
        let jumps = jumpStack.pop()

        for(let jump = jumps-1;jump<=jumps+1;jump++){
            if(jump <= 0){
                continue
            }
            let nextStone = position + jump
            if(nextStone === lastStone){
                return true
            }else if(hash[nextStone]){
                positionStack.push(nextStone)
                jumpStack.push(jump)
            }
        }
    }
    return false
};
