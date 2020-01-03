/* You are playing the following Bulls and Cows game with your friend: You write down a number and ask your friend to guess what the number is. Each time your friend makes a guess, you provide a hint that indicates how many digits in said guess match your secret number exactly in both digit and position (called "bulls") and how many digits match the secret number but locate in the wrong position (called "cows"). Your friend will use successive guesses and hints to eventually derive the secret number.

Write a function to return a hint according to the secret number and friend's guess, use A to indicate the bulls and B to indicate the cows.

Please note that both secret number and friend's guess may contain duplicate digits.

Example 1:

Input: secret = "1807", guess = "7810"

Output: "1A3B"

Explanation: 1 bull and 3 cows. The bull is 8, the cows are 0, 1 and 7. */


class Node{
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class LinkedList{
    constructor(node){
        this.head = node;
    }
}

var getHint = function(secret, guess) {
    let b=0;
    let a=0;
    //hash for cows reference
    let hash = {}
    //for bulls reference
    let ahash = {}
    //bull calcualtion and hash update
    for(let i=0;i<secret.length;i++){
        if(secret[i]===guess[i]){
            b+=1
            ahash[i] = true;
        }else if(!hash[secret[i]]){
            let node = new Node(i)
            hash[secret[i]] = new LinkedList(node)
        }else{
            let node = new Node(i)
            let temp = hash[secret[i]].head
            while(temp.next){
                temp = temp.next
            }
            temp.next = node
        }
    }
    for(let j=0;j<guess.length;j++){
        if(hash[guess[j]] && !ahash[j]){
            let temp = hash[guess[j]].head
            let flag = true
            while(temp && flag){
                if(!temp.checked){
                    a+=1
                    temp.checked = true
                    flag = false
                }
                temp = temp.next
             }
        }
    }
    return `${b}A${a}B` // A-bulls and B-cows
};

