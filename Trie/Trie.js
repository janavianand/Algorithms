//Find the longest common prefix. ex input => ['flow','flower','fling'] => output: 'fl'
//ex 2 input=> ['no','yes'] => output:''

class Trie{
  constructor(value){
    this.root = value;
    this.children = {};
    this.end = false;
  }
  addNode(word){
    let node = this
    for(let i=0;i<word.length;i++){
      if(!node.children[word[i]]){
          if(i===word.length-1){
          node.children[word[i]] = {...new Trie(word[i]),end:true}
        }else{
            node.children[word[i]] = {...new Trie(word[i])}
        }
        node = node.children[word[i]]
      }else{
        if(i===word.length-1){
          node.children[word[i]] = {...new Trie(word[i]),end:true}
        }
        node = node.children[word[i]]
      }
    }
  }
}

var longestCommonPrefix = function(strs) {
    if(strs.includes('')){
        return ''
    }
    let trie = new Trie(null)
    strs.forEach((i)=>{
        trie.addNode(i)
    })
    let result = ''
    if(Object.keys(trie.children).length !== 1 ){
        return result
    }else{
        let node = trie.children[Object.keys(trie.children)[0]]
        while(node.root){
            result = result + node.root
            // console.log(node.end)
            if(node.end || Object.keys(node.children).length !== 1){
                return result
            }else{
                node = node.children[Object.keys(node.children)[0]]
            }
        }
        return result
    }
};


console.log(longestCommonPrefix(['flow','fl','flower','fling']))
