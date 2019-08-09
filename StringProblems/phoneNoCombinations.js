/* Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
Example:


Input: "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
Note:

Please return your output sorted in lexicographical order.*/

let hash ={
    2:['a','b','c'],
    3:['d','e','f'],
    4:['g','h','i'],
    5:['j','k','l'],
    6:['m','n','o'],
    7:['p','q','r','s'],
    8:['t','u','v'],
    9:['w','x','y','z']
}

function helper(arr){
    if(arr.length===1){
        return arr[0]
    }else{
        let arr1 = arr.shift();
        let arr2 = arr.shift();
        let temp = []
        for(let i=0;i<arr1.length;i++){
            for(let j=0;j<arr2.length;j++){
                temp.push(arr1[i]+arr2[j])
            }
        }
        arr.unshift(temp)
        return helper(arr)
    }
}

var letterCombinations = function(digits) {
    let arr = []
    if(digits === "") return arr
    for(let i=0;i<digits.length;i++){
        arr.push(hash[digits[i]])
    }
    return helper(arr).sort()
};
