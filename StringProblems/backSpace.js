
/* Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

Example 1:

Input: S = "ab#c", T = "ad#c"
Output: true
Explanation: Both S and T become "ac". */

var backspaceCompare = function(S, T) {
    S = strBackspace(S)
    console.log(S)
    T = strBackspace(T)
    console.log(T)
    return S===T
};

function strBackspace(str){
    let stack = []
    for(let i=0;i<str.length;i++){
        if(str[i]==='#'){
            if(stack.length !==0){
                stack.pop()
            }
        }else{
            stack.push(str[i])
        }
    }
    return stack.join('');
}
