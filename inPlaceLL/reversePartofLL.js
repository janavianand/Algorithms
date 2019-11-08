class Node {
  constructor(value, next=null){
    this.value = value;
    this.next = next;
  }

  get_list() {
    result = "";
    temp = this;
    while (temp !== null) {
      result += temp.value + " ";
      temp = temp.next;
    }
    return result;
  }
};

const reverse_sub_list = function(head, p, q) {
  let node = head
  let len = 1
  let tempHead = null

  while(len !== p && node){
    len += 1
    tempHead = node
    node = node.next
  }
  let temp = null
  let start = node

  while(len !==q+1 && node !== null){
    len += 1
    let nodeNext = node.next
    node.next = temp
    temp = node
    node = nodeNext
  }
  start.next = node
  tempHead.next = temp
  return head
};


head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)

console.log(`Nodes of original LinkedList are: ${head.get_list()}`)
console.log(`Nodes of reversed LinkedList are: ${reverse_sub_list(head, 2, 4).get_list()}`)
