var checkRecord = function(s) {
    let Acount =0;
    let start = 0;
    let end = 0;
    for(let i=0;i<s.length;i++){
        if(s[i] === 'A') Acount += 1
        if(Acount > 1){
            return false
        }
        if(s[i] === 'L'){
            start = i;
            end = i+1;
            while(end < s.length && s[end] === 'L'){
                if((end-start)>1){
                    return false
                }else{
                    end += 1
                }
            }
            i=end-1
        }
    }
    return true
};
