function insertNodeAtPosition(head, data, position) {
  let node;
  if (position === 0) {
      node = new SinglyLinkedListNode(data,head)
      head = node
  }
  node = head
  for (let i = 0; i < position; i++){
      if (node) {
          if (position === i + 1) {
              let newnode = new SinglyLinkedListNode(data)
              newnode.next = node.next
              node.next = newnode
              return head
          } else {
              node = node.next
          }
      } else {
          return head
      }
  }
}

class SinglyLinkedListNode{
  constructor(data){
    this.data = data,
    this.next = null
  }
}
