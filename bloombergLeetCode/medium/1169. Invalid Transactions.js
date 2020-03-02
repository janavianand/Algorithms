/*



A transaction is possibly invalid if:

the amount exceeds $1000, or;
if it occurs within (and including) 60 minutes of another transaction with the same name in a different city.
Each transaction string transactions[i] consists of comma separated values representing the name, time (in minutes), amount, and city of the transaction.

Given a list of transactions, return a list of transactions that are possibly invalid.  You may return the answer in any order.



Example 1:

Input: transactions = ["alice,20,800,mtv","alice,50,100,beijing"]
Output: ["alice,20,800,mtv","alice,50,100,beijing"]
Explanation: The first transaction is invalid because the second transaction occurs within a difference of 60 minutes, have the same name and is in a different city. Similarly the second one is invalid too.
Example 2:

Input: transactions = ["alice,20,800,mtv","alice,50,1200,mtv"]
Output: ["alice,50,1200,mtv"]
Example 3:

Input: transactions = ["alice,20,800,mtv","bob,50,1200,mtv"]
Output: ["bob,50,1200,mtv"]


Constraints:

transactions.length <= 1000
Each transactions[i] takes the form "{name},{time},{amount},{city}"
Each {name} and {city} consist of lowercase English letters, and have lengths between 1 and 10.
Each {time} consist of digits, and represent an integer between 0 and 1000.
Each {amount} consist of digits, and represent an integer between 0 and 2000.

Link - https://leetcode.com/problems/invalid-transactions/

*/

/**
 * @param {string[]} transactions
 * @return {string[]}
 */
var invalidTransactions = function(transactions) {
    if(!transactions.length){
        return []
    }
    console.log('input',transactions)
    let parsedTrans = transactions.map(trans=>trans.split(','))

    parsedTrans.sort((a,b)=>{
        if(a[0]<b[0]){
            return -1
        }
        if(a[0]>b[0]){
            return 1
        }
        if(parseInt(a[1])<parseInt(b[1])){
            return -1
        }
        if(parseInt(a[1])>parseInt(b[1])){
            return 1
        }
    })
    console.log('parsed',parsedTrans)
    let result = []

    for(let i=0;i<parsedTrans.length;i++){
        if(i>0 && parsedTrans[i][0] === parsedTrans[i-1][0]){
            if((parseInt(parsedTrans[i][1])-parseInt(parsedTrans[i-1][1]) <= 60) && (parsedTrans[i][3] !== parsedTrans[i-1][3])){
               result[result.length-1] === parsedTrans[i-1].join(',') ? result.push(parsedTrans[i].join(',')) : result.push(parsedTrans[i-1].join(','),parsedTrans[i].join(','))
                continue
            }
        }

        if(invalidAmount(parsedTrans[i][2])){
            result[result.length-1] === parsedTrans[i].join(',') ? null : result.push(parsedTrans[i].join(','))
        }
    console.log(result)
    }
    let final = transactions.filter(trans=>result.includes(trans))
    return final
}

function invalidAmount(transaction){
    return parseInt(transaction)>=1000
}
