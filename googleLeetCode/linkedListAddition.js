/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {

    if(!l1) return l2
    if(!l2) return l1

    let carry = 0;

    let node1 = l1
    let node2 = l2
    let nullflag = true

    while(node1 && node2 && nullflag){
        let total = node1.val+node2.val+carry
        node1.val = total >= 10 ? total % 10 : total
        carry = total >= 10 ? 1 : 0
        if(node1.next && node2.next){
            node1 = node1.next
            node2 = node2.next
        }else{
            nullflag = false
        }

    }
    if(node1.next === null && node2.next){
        node1.next = node2.next
    }
    if(node1.next){
        let flag = true
        node1 = node1.next
        while(flag && carry && node1){
            let sum = node1.val+carry
            node1.val = sum >= 10 ? sum % 10 : sum
            carry = sum >= 10 ? 1 : 0
            if(node1.next) {
                node1 = node1.next
            }else{
                flag = false
            }
        }
    }

    if(carry){
        let newNode = new ListNode(1)
        node1.next = newNode
    }
    return l1
};
