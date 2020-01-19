

/*

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]

*/

/*
Algo

We can’t add more than ‘N’ open parenthesis.
To keep the parentheses balanced, we can add a close parenthesis ) only when we have already added enough open parenthesis (. For this, we can keep a count of open and close parenthesis with every combination.
Following this guideline, let’s generate parentheses for N=3:

Start with an empty combination: “”
At every step, let’s take all combinations of the previous step and add ( or ) keeping the above-mentioned two rules in mind.
For the empty combination, we can add ( since the count of open parenthesis will be less than ‘N’. We can’t add ) as we don’t have an equivalent open parenthesis, so our list of combinations will now be: “(”
For the next iteration, let’s take all combinations of the previous set. For “(” we can add another ( to it since the count of open parenthesis will be less than ‘N’. We can also add ) as we do have an equivalent open parenthesis, so our list of combinations will be: “((”, “()”
In the next iteration, for the first combination “((”, we can add another ( to it as the count of open parenthesis will be less than ‘N’, we can also add ) as we do have an equivalent open parenthesis. This gives us two new combinations: “(((” and “(()”. For the second combination “()”, we can add another ( to it since the count of open parenthesis will be less than ‘N’. We can’t add ) as we don’t have an equivalent open parenthesis, so our list of combinations will be: “(((”, “(()”, ()("
Following the same approach, next we will get the following list of combinations: “((()”, “(()(”, “(())”, “()((”, “()()”
Next we will get: “((())”, “(()()”, “(())(”, “()(()”, “()()(”
Finally, we will have the following combinations of balanced parentheses: “((()))”, “(()())”, “(())()”, “()(())”, “()()()”
We can’t add more parentheses to any of the combinations, so we stop here.


*/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    if(n===0){
        return ''
    }
    let result = [];
    let queue = [new Parenthesis('',0,0)]

    while(queue.length){
        let paren = queue.shift();
        if(paren.open === n && paren.close === n){
            result.push(paren.str)
        }else{
            if(paren.open < n){
                queue.push(new Parenthesis(paren.str+'(',paren.open+1,paren.close))
            }
            if(paren.open > paren.close){
                queue.push(new Parenthesis(paren.str+')',paren.open,paren.close+1))
            }
        }
    }
    return result
};

class Parenthesis{
    constructor(paren,open,close){
        this.str = paren
        this.open = open
        this.close = close
    }
}
