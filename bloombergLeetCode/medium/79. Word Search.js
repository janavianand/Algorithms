/*

Given a 2D board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

Example:

board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

Given word = "ABCCED", return true.
Given word = "SEE", return true.
Given word = "ABCB", return false.

Link - https://leetcode.com/problems/word-search/
*/

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    if(!board.length){
        return false
    }
    let result = false  // global variable to manipulate

    function search(board,word,row,col,wordP){
        if(!result){  // very important to escape the unnecessary computations and time limit exceed error

          // The order of the below check matters. if changed, will return false for board of lenght 1. ex [['a']] and word - 'a'
            if(isNotValid(board,row,col)){
                return
            }
            if(board[row][col] !== word[wordP]){
                return
            }
            if(wordP === word.length-1){ // check if it reached the end of the word. Not like pointer > word.length-1 as it throws error for the above ex. For the order of the checks, only the above check (wordP === word.length-1) works.
                result = true
                return
            }
            let letter = board[row][col]
            board[row][col] = null
            search(board,word,row+1,col,wordP+1)
            search(board,word,row-1,col,wordP+1)
            search(board,word,row,col+1,wordP+1)
            search(board,word,row,col-1,wordP+1)
            board[row][col] = letter
        }
    }

    for(let i=0;i<board.length;i++){
        for(let j=0;j<board[i].length;j++){
            if(board[i][j] === word[0]){
                search(board,word,i,j,0)
                if(result){
                    return result
                }
            }
        }
    }
    return result
};


function isNotValid(board,row,col){
    if(row<0 || col<0 || row>board.length-1 || col>board[row].length-1){
        return true
    }
    return false
}
