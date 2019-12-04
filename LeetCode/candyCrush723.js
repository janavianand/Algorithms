/**
 * @param {number[][]} board
 * @return {number[][]}
 */
var candyCrush = function(board) {
    const rowLimit = board.length
    const colLimit = board[0].length

    markCandyToCrush(board,rowLimit,colLimit)
    while(!isEnd(board,rowLimit,colLimit)){
        crushCandy(board,rowLimit,colLimit)
        markCandyToCrush(board,rowLimit,colLimit)
    }
    return board
};

function markCandyToCrush(board,rowLimit,colLimit){
    for(let row=0;row<rowLimit;row++){
        for(let col=0;col<colLimit;col++){
            let value = Math.abs(board[row][col])
            if(isValid(row-1,rowLimit) && isValid(row+1,rowLimit) && compareValue(value,board[row-1][col],board[row+1][col])){
                board[row][col] = -value
                board[row-1][col] = -value
                board[row+1][col] = -value
            }
            if(isValid(col-1,colLimit) && isValid(col+1,colLimit) && compareValue(value,board[row][col-1],board[row][col+1])){
                board[row][col] = -value
                board[row][col-1] = -value
                board[row][col+1] = -value
            }
        }
    }
}

function isValid(index,limit){
    if(index < 0 || index >= limit){
        return false
    }

    return true
}

function compareValue(value,value1,value2){
    value1 = Math.abs(value1)
    value2 = Math.abs(value2)
    return value === value1 && value === value2
}

function isEnd(board,rowLimit,colLimit){
    for(let row=0;row<rowLimit;row++){
        for(let col=0;col<colLimit;col++){
            if(board[row][col] < 0){
                return false
            }
        }
    }
    return true
}

function crushCandy(board,rowLimit,colLimit){
    for(let col = 0;col<colLimit;col++){
        let stack = []
        for(let row=0;row<rowLimit;row++){
            if(board[row][col] > 0){
                stack.push(board[row][col])
            }
        }
        if(stack.length === rowLimit){
            continue
        }

        let length = rowLimit-1

        while(stack.length){
            board[length][col] = stack.pop()
            length -= 1
        }

        while(length >= 0 ){
            board[length][col] = 0
            length -= 1
        }

    }
}
