//Given a string and key, encrypt the string by shifting each letter of the string. Its a circular shift such that if the key goes beyond character 'z' ie 26, then it goes to the starting character 'a'.

//example : 'abc' key = 2 output: 'cde'
//example : 'xyz' key = 2 output: 'zab'

function caesarCipher(string, key) {
  let result = ''
  if(key>0){
    if(string.length > 0){
      //if key is larger number
      let modkey = key>26 ? key%26 : key
      for(let i=0; i<string.length;i++){
        let charcode = string.charCodeAt(i) + modkey
        if(charcode > 122){  //for the circular shift
          charcode = 96+(charcode-122)
        }
        result = result+String.fromCharCode(charcode)
      }
    }
    return result
  }else{
    return string
  }
}
