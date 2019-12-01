var minWindow = function(S, T) {
    let strLen = S.length
    let subStrLen = T.length

    let dp = new Array(subStrLen+1).fill(-1)

    dp[0] = 0
    let result = S+T
    for(let i=1;i<=strLen;i++){
        let nextDp = new Array(subStrLen+1).fill(-1)
        nextDp[0] = i
        for(let k=1;k<=subStrLen;k++){
            if(S[i-1] === T[k-1]){
                nextDp[k] = dp[k-1]
            }else{
                nextDp[k] = dp[k]
            }
        }
        dp = nextDp
        if(dp[subStrLen] >= 0 && dp[0]-dp[subStrLen] < result.length ){
            result = S.slice(dp[subStrLen],dp[0])
        }
    }
    return result.length < strLen ? result : ''
};
