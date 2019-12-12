var coinChange = function(coins, amount) {
    let dp = new Array(amount+1).fill(Infinity)
    dp[0] = 0
    for(let i=1;i<=amount;i++){
        for(let coin of coins){
            let diff = i-coin
            if(diff >= 0){
                dp[i] = Math.min(dp[i],dp[diff]+1)
            }
        }
    }
    return dp[amount] !== Infinity ? dp[amount] : -1
};
