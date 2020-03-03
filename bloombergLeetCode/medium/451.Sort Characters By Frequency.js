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

//test question

/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    if(!s.length || s.length<3){
        return s
    }

    let map = new Map()

    for(let char of s){
        map.set(char,map.get(char)+1 || 1)
    }

    let maxHeap = new MaxHeap()

    for(let [char,freq] of map){
        maxHeap.add([char,freq])
    }

    let result = []

    while(maxHeap.len){
        let [char,freq] = maxHeap.pop()
        result.push(char.repeat(freq))
    }

    return result.join('')
};

class MaxHeap{
    constructor(){
        this.heap = []
        this.len = 0
    }
    add(value){
        this.heap.push(value)
        this.len = this.heap.length
        if(this.len > 1){
            this.swiftUp(this.len-1)
        }
    }
    pop(){
        swap(this.heap,0,this.len-1)
        let rem = this.heap.pop()
        this.len = this.heap.length
        if(this.len > 1){
            this.swiftDown(0)
        }
        return rem
    }
    swiftUp(index){
        let par = Math.floor(Math.abs(index-1)/2)
        if(par >= 0 && this.heap[par][1] < this.heap[index][1]){
            swap(this.heap,par,index)
            this.swiftUp(par)
        }
    }
    swiftDown(index){
        let ind1 = Math.floor(Math.abs(2*index+1))
        let ind2 = Math.floor(Math.abs(2*index+2))
        let child1 = this.heap[ind1] || [null,null]
        let child2 = this.heap[ind2] || [null,null]

        if((child1[1] || child2[1]) && (child1[1] > child2[1])){

            if(this.heap[index][1] < child1[1]){
                swap(this.heap,ind1,index)
                this.swiftDown(ind1)
            }
        }else if(child2[1]){
            if(this.heap[index][1] < child2[1]){
                swap(this.heap,ind2,index)
                this.swiftDown(ind2)
            }
        }

    }
}

function swap(arr,i,j){
    [arr[i],arr[j]] = [arr[j],arr[i]]
}
