var decodeString = function(s) {

    if(s.length < 2) return s

    let numStack = []
    let wordStack = []

    let numStr = ''
    let wordStr = ''

    for(let i=0;i<s.length;i++){
        if(s[i].match(/\d/)){

            numStr += s[i]
        }else if(s[i] === '['){
            numStack.push(+(numStr))
            wordStack.push(wordStr)

            wordStr = ''
            numStr = ''
        }else if(s[i] === ']'){
            let temp = ''
            let num = numStack.pop()

            for(let limit = 0;limit<num;limit++){
                temp += wordStr
            }
            wordStr = wordStack.pop() + temp

        }else{
            wordStr += s[i]
        }
    }

    return wordStr
};
