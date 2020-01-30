/*

Given a sequence of words, check whether it forms a valid word square.

A sequence of words forms a valid word square if the kth row and column read the exact same string, where 0 ≤ k < max(numRows, numColumns).

Note:
The number of words given is at least 1 and does not exceed 500.
Word length will be at least 1 and does not exceed 500.
Each word contains only lowercase English alphabet a-z.
Example 1:

Input:
[
  "abcd",
  "bnrt",
  "crmy",
  "dtye"
]

Output:
true

Explanation:
The first row and first column both read "abcd".
The second row and second column both read "bnrt".
The third row and third column both read "crmy".
The fourth row and fourth column both read "dtye".

Therefore, it is a valid word square.
Example 2:

Input:
[
  "abcd",
  "bnrt",
  "crm",
  "dt"
]

Output:
true

Explanation:
The first row and first column both read "abcd".
The second row and second column both read "bnrt".
The third row and third column both read "crm".
The fourth row and fourth column both read "dt".

Therefore, it is a valid word square.
Example 3:

Input:
[
  "ball",
  "area",
  "read",
  "lady"
]

Output:
false

Explanation:
The third row reads "read" while the third column reads "lead".

Therefore, it is NOT a valid word square.

*/

//Method-1

/**
 * @param {string[]} words
 * @return {boolean}
 */
var validWordSquare = function(words) {
    if(!words.length){
        return true
    }

    let result = new Array(words.length).fill('')

    for(let i=0;i<words.length;i++){
        for(let j=0;j<words[i].length;j++){
            result[j] += words[i][j]
        }
    }

    for(let row=0;row<words.length;row++){
        if(words[row] !== result[row]){
            return false
        }
    }
    return true
};

//Method 2 - optimized

var validWordSquare = function(words) {
    let len = words[0].length
    for (let i = 0 ; i<words.length; i++) {
        for (let j = 0 ; j<words[i].length; j++) {
            if (words[j] == undefined) return false
            let transPosed = words[j][i]

            if (words[i][j] !== transPosed) return false
        }
    }
    return true
};
