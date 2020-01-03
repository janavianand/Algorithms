var expressiveWords = function(S, words) {
    let count = 1
    let result = 0

    for(let i=0;i<words.length;i++){
        let word = words[i]
        let k = 0
        let m = 0
        let flag = true
        while(k<S.length && m<word.length){

            if(word.length > S.length){
                flag=false
                break
            }
            if(m> 0 && k>0 && word[m] === S[k] && word[m-1] === word[m]){
                count+= 1
            }else if(m> 0 && k>0 && word[m] === S[k] && word[m-1] !== word[m]){
                count = 1
            }else if(word[m] !== S[k] && word[m-1] === S[k]){

                while(word[m]!==S[k] && S[k] === S[k-1]){
                    count+=1
                    k+=1
                }
                if(count < 3){
                    flag=false
                    break
                }
                count = 0
                k-=1
                m-=1
            }else if(word[m] !== S[k] && word[m-1] !== S[k]){
                flag=false
                break
            }else if(!m && !k && word[m] !== S[k]){
                flag=false
                break
            }
            k+=1
            m+=1
        }
        if(k!==S.length && flag){
            while(k<S.length){
                if(word[m-1] === S[k]){
                    count += 1
                    k+=1
                }else{
                    flag = false
                    break
                }
            }
            if(count < 3){
                flag = false
            }
        }
        if(flag && m===word.length) {
            result+=1
        }
        count = 1
    }
    return result
};
