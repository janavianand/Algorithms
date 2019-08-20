//Check if a string is palindrome.
function palindrome(string) {
	if(string.length <= 1) return true
	else {
		if(string[0] === string[string.length-1]){
			return palindrome(string.substring(1,string.length-1))
		}else {return false}
	}
}
