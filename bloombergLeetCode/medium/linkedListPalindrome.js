/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if(!head){
        return head
    }

    let length = 0

    let node = head

    while(node){
        node = node.next
        length += 1
    }

    let half = Math.floor(length/2)

    node = head

    let newList = null

    let track = 0

    while(node){

        if(track === half-1){
            newList = reverse(node.next)
            node.next = null
            break
        }
        node = node.next
        track += 1
    }

    node = head
    let comp = newList

    while(comp && node){
        if(comp.val !== node.val){
            return false
        }
        comp = comp.next
        node = node.next
    }
    return true
};

function reverse(list){

    let newNode = null

    let pointer = list

    while(pointer){

        let temp = pointer.next

        pointer.next = newNode

        newNode = pointer

        pointer = temp

    }

    return newNode

}
