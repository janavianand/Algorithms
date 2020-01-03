/**
 * @param {string} input
 * @return {number}
 */
var lengthLongestPath = function(input) {
    let index = 0
    let stack = []
    let result = 0
    while(index<input.length){
        let depth = getDepth(input,index)
        index += depth
        let fileName = getFileName(input,index)
        index += fileName.length
        while(depth < stack.length){
            stack.pop()
        }
        stack.push(fileName)
        if(isFile(fileName)){
            let len = stack.reduce((acc,letter)=>acc+letter.length,0)+stack.length-1
            result = Math.max(result,len)
        }
        index += 1
    }
    return result
};

function getFileName(input,start){
    let end = start
    while(end<input.length && input[end] !== '\n'){
        end += 1
    }
    return input.slice(start,end)
}

function getDepth(input,index){
    let start = index
    while(start<input.length && input[index] === '\t'){
        index+=1
    }
    return index-start
}
function isFile(fileName){
    return (/\.+/).test(fileName)
}
