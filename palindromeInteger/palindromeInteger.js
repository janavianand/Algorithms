
// check if the number is isPalindrome. if it is return true else return false.
// ex. numbers 1 to 9 return true
// negative numbers return false

function isPalindrome(x) {
  if(x<0 || (x%10 === 0 && x!==0)) {
     return false
  }
  let rev = 0;
  if(x<10 || x===0){
      return true
  }
  while(x>rev){
      let temp = x % 10
      x = Math.floor(x/10)
      rev = rev*10+temp
  }
  return rev === x || (rev >=10 ? x === Math.floor(rev / 10): false)
};
