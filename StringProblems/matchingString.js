/* Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
Input: haystack = "hello", needle = "ll"
Output: 2
 */
var strStr = function(haystack, needle) {
    if(needle === '') return 0

    //_____________________________________
    // Not good performance
    //_____________________________________

    // for(let i=0; i<haystack.length ; i++){
    //     if(haystack[i] === needle[0]){
    //         let flag = true;
    //         let j = 0;
    //         while(flag && j<needle.length){
    //             if(haystack[i+j] !== needle[j]){
    //                 flag = false
    //             }else if(j === needle.length-1){
    //                 return i
    //             }else{
    //                 j+=1
    //             }
    //         }
    //     }
    // }
    //return -1
    //_____________________________________
    //Better Performances
    //_____________________________________
//     let match = haystack.match(needle)

//     return match === null ? -1 : match.index

    //_____________________________________

    //return haystack.search(needle)
    //_____________________________________
    return haystack.indexOf(needle)

};
