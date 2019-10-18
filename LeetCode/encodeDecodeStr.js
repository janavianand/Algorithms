/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
var encode = function(strs) {
    let str = ''
    for(let  i=0;i<strs.length;i++){
        let len = strs[i].length
        str += `${len}/${strs[i]}`
    }
    return str
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function(s) {
    let arr = []
    let index = 0
    while(index < s.length){
        let start = s.indexOf('/',index);
        let len = Number(s.slice(index,start));
        arr.push(s.slice(start+1,start+len+1))
        index = start+len+1
    }
    return arr
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */
