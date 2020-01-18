
/*

Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.

get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

The cache is initialized with a positive capacity.

Follow up:
Could you do both operations in O(1) time complexity?

Example:

LRUCache cache = new LRUCache( 2 /* capacity */ );
/*
cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // returns 1
cache.put(3, 3);    // evicts key 2
cache.get(2);       // returns -1 (not found)
cache.put(4, 4);    // evicts key 1
cache.get(1);       // returns -1 (not found)
cache.get(3);       // returns 3
cache.get(4);       // returns 4


Link - https://leetcode.com/problems/lru-cache/

*/

/*

The cache is restricted to a certain size, so if there is an element that wants to enter the cache, the least recently used item must be evicted in order to make room for the next item.  The LRU cache will have the most recently used item at the front of the list and the least recently used at the back of the list.
Consider the requirements, a get() and put() method in O(1) time.  Space complexity, we can go heavy.  We need fast lookups and fast removals.  What data structure can help us with fast lookups?  Hashtable.  What about fast removals? Think through data structures in your head.  Most of the time, fast removals work well with a doubly-linked-list.  We also won’t have to resize ourselves during resizing.  A key pattern, backing up the linked list with a hastable to gain O(1) access is great!

*/

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.hash = {}
  this.list = new LinkedList()
  this.length = capacity
};

/**
* @param {number} key
* @return {number}
*/
LRUCache.prototype.get = function(key) {
  if(this.hash[key]){
      this.list.moveNode(this.hash[key])
  }
  return this.hash[key] ? this.hash[key].value : -1
};

/**
* @param {number} key
* @param {number} value
* @return {void}
*/
LRUCache.prototype.put = function(key, value) {
  if(this.hash[key]){
      this.list.moveNode(this.hash[key])
      this.hash[key].value = value
  }else{
      if(this.length === 0){
      delete(this.hash[this.list.head.key])
      this.list.delete()
      this.length += 1
      }
      let newNode = new Node(key,value)
      this.list.addNode(newNode)
      this.hash[key] = newNode
      this.length -= 1
  }
};

/**
* Your LRUCache object will be instantiated and called as such:
* var obj = new LRUCache(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/
class Node{
  constructor(key,value){
      this.value = value
      this.key = key
      this.prev = null
      this.next = null
  }
}

class LinkedList{
  constructor(){
      this.head = null
      this.tail = null
  }
  addNode(node){
      if(!this.head && !this.tail){
          this.head = node
          this.tail = node
      }else{
          this.tail.next = node
          node.prev = this.tail
          this.tail = node
      }
  }
  delete(){
      if(this.head){
          if(this.head === this.tail){
              this.head = null
              this.tail = null
          }else{
              let node = this.head.next
              this.head = node
              this.head.prev = null
          }
      }
  }
  moveNode(node){
      if(this.tail !== node){

          let prevNode = node.prev || null
          let nextNode = node.next || null

          if(prevNode){
              prevNode.next = nextNode
          }
          if(nextNode){
              nextNode.prev = prevNode
              if(this.head === node){
                  this.head = nextNode
              }
          }

          this.tail.next = node
          node.prev = this.tail
          this.tail = node
          node.next = null
      }
  }moveNodeToHead(node){
      if(this.head !== node){

          let prevNode = node.prev || null
          let nextNode = node.next || null

          if(prevNode){
              prevNode.next = nextNode
              if(this.tail === node){
                  this.tail = prevNode
              }
          }
          if(nextNode){
              nextNode.prev = prevNode
          }
          node.next = this.head
          node.prev = null
          this.head = node
      }
  }
}
