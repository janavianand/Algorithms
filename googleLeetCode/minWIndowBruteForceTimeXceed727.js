/**
 * @param {string} S
 * @param {string} T
 * @return {string}
 */
var minWindow = function(S, T) {

    if(!S.length | S.length < T.length){
        return ''
    }

    let start = 0
    let end = 0
    let minWin = ''
    let tempWin = ''

    let tPointer = 0
    let flag = false

    while(end<S.length){
        if(flag){
            tempWin += S[end]
        }

        if(S[end] === T[tPointer]){
            if(!flag){
                flag = true
                tempWin += S[end]
            }
            tPointer += 1
            if(tPointer === T.length){
                if(!minWin.length){
                    minWin = tempWin
                }else{
                    minWin = minWin.length <= tempWin.length ? minWin : tempWin
                }
                tPointer = 0
                tempWin = ''
                flag = false
                end = start
                start += 1
            }
        }else if(!flag){
            start += 1
        }
        end += 1
    }
    return minWin
};
