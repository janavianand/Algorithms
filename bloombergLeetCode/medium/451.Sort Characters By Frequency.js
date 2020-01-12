/*

Given a string, sort it in decreasing order based on the frequency of characters.

Example 1:

Input:
"tree"

Output:
"eert"

Explanation:
'e' appears twice while 'r' and 't' both appear once.
So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
Example 2:

Input:
"cccaaa"

Output:
"cccaaa"

Explanation:
Both 'c' and 'a' appear three times, so "aaaccc" is also a valid answer.
Note that "cacaca" is incorrect, as the same characters must be together.
Example 3:

Input:
"Aabb"

Output:
"bbAa"

Explanation:
"bbaA" is also a valid answer, but "Aabb" is incorrect.
Note that 'A' and 'a' are treated as two different characters.

Link - https://leetcode.com/problems/sort-characters-by-frequency/

*/

/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    if(!s.length){
        return ''
    }

    let map = new Map()

    let maxH = new MaxHeap()

    for(let letter of s){
        map.set(letter,map.get(letter)+1 || 1)
    }

    for(let letterFreq of map){
        maxH.pushMax(letterFreq)
    }

    let result = ''

    while(maxH.heap.length){
        let [letter,freq] = maxH.popMax()
        result += letter.repeat(freq)
    }

    return result
};

class MaxHeap{
    constructor(){
        this.heap = []
    }
    pushMax(value){
        this.heap.push(value)
        if(this.heap.length){
            this.swiftUp(this.heap.length-1)
        }
    }
    popMax(){
        if(this.heap.length){
            swap(this.heap,0,this.heap.length-1)
            let value = this.heap.pop()
            this.swiftDown(0)
            return value
        }
    }
    swiftUp(index){
        let parentIndex = Math.floor(Math.abs(index-1)/2)
        if(this.heap[parentIndex][1] < this.heap[index][1]){
            swap(this.heap,parentIndex,index)
            this.swiftUp(parentIndex)
        }
    }
    swiftDown(index){
        let child1 = 2*index+1
        let child2 = 2*index+2
        if(this.heap[child1] && this.heap[child1][1] > this.heap[index][1]){
            swap(this.heap,child1,index)
            this.swiftDown(child1)
        }
        if(this.heap[child2] && this.heap[child2][1] > this.heap[index][1]){
            swap(this.heap,child2,index)
            this.swiftDown(child2)
        }
    }
}

function swap(heap,i,j){
    [heap[i],heap[j]] = [heap[j],heap[i]]
}
