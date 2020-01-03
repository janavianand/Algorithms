var isIsomorphic = function(s, t) {

    if(!s.length || !t.length) return true

    let hashS = {}
    let hashT = {}

    for(let i=0;i<s.length;i++){

        if(hashS[s[i]] === undefined && hashT[t[i]] === undefined){
            hashS[s[i]] = t[i]
            hashT[t[i]] = s[i]
        }else if(hashS[s[i]] !== t[i] || hashT[t[i]] !== s[i]){
            return false
        }
    }
    return true

};
