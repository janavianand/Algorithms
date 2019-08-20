/* Input: String="araaci", K=2
Output: 4
Explanation: The longest substring with no more than '2' distinct characters is "araa".*/

const longest_substring_with_k_distinct = function(str, k) {
  if(str === '') return 0
  let hash ={}
  let start = 0;
  let end = 0;
  let result = 0;
  let count  = 0;

  while(end < str.length){
    if(count<k && hash[str[end]] === undefined){
      hash[str[end]] = true
      count += 1
      end += 1
    }else if(count <= k && hash[str[end]]){
      end += 1
    }else if(count === k && hash[str[end]] === undefined){
      result = Math.max(result,(end-start))
      start += 1;
      hash = {}
      hash[str[start]] = true
      end = start + 1
      count = 1
    }
  }

  return result;
};


console.log(`Length of the longest substring: ${longest_substring_with_k_distinct("araaci", 2)}`)
console.log(`Length of the longest substring: ${longest_substring_with_k_distinct("araaci", 1)}`)
console.log(`Length of the longest substring: ${longest_substring_with_k_distinct("cbbebi", 3)}`)
