/* Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4 */

class LinkedList{
    constructor(node){
        this.head = node;
    }
}
class Node{
    constructor(value){
        this.val = value;
        this.next = null;
    }
}

var mergeTwoLists = function(l1, l2) {
    let list = new LinkedList(0)
    let pointer = list.head
    if(!l1) return l2
    if(!l2) return l1
    while(l1 && l2){
          if(l1.val<l2.val){
                if(!list.head){
                    list.head = new Node(l1.val)
                    l1 = l1.next
                    pointer = list.head
                }else{
                    pointer.next = new Node(l1.val)
                    l1 = l1.next
                    pointer = pointer.next
                }
            }else{
                if(!list.head){
                    list.head = new Node(l2.val)
                    l2 = l2.next
                    pointer = list.head
                }else{
                    pointer.next = new Node(l2.val)
                    l2 = l2.next
                    pointer = pointer.next
                }
        }
    }
    if(l1 && pointer){
        pointer.next = l1
    }else if (l2 && pointer){
        pointer.next = l2
    }

    return list.head
};
