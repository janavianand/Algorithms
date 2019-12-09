/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself.
Example:
Input: ('0' -> 2 -> 4 -> 3) +
       (5 -> 6 -> 4)

Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
*/

function sumList(list1,list2){

  let dummy = new Node(0);

  let head = dummy;

  dummy.next = list1;

  let carry = 0;

  while(list1 || list2){

    let value1 = list1.value || 0;
    let value2 = list2.value || 0;

    let sum = value1+value2+carry;

    if(sum >= 10){
      carry = sum /10;
      sum = sum % 10;
    }

    dummy.next = new Node(sum)
    dummy = dummy.next

    list1 = list1.next || 0;
    list2 = list2.next || 0;

  }

  carry ? (dummy.next = new Node(carry)) : 0

  return head.next

}

class Node{
  constructor(node){
    this.value = node;
    this.next = null
  }
}
