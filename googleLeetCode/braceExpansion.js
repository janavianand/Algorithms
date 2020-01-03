/**
 * @param {string} S
 * @return {string[]}
 */
var expand = function(S) {

    if(!S.length) return ''

    let arr = []
    let temp = []
    let s = S.split('');
    let flag = false
    for(let i=0;i<S.length;i++){
        if((s[i] === '{' || s[i] === '}') && temp.length){
            arr.push(temp);
            flag = true
            temp = []
        }else if(s[i]!=='{' && s[i] !== ','){
            temp.push(s[i])
        }
    }

    if(temp.length) arr.push(temp)

    while(arr.length > 1){

        let arr1 = arr.shift();
        let arr2 = arr.shift();
        arr.unshift(combine(arr1,arr2))

    }
    if(flag){
        return arr[0].sort()
    }else{
        return [arr[0].join('')]
    }
};

function combine(arr1,arr2){
    let res = []
    for(let i=0;i<arr1.length;i++){
        for(let k=0;k<arr2.length;k++){
            res.push(arr1[i]+arr2[k])
        }
    }
    return res
}
