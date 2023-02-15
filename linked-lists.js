class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}
class LinkedList {
  constructor(head = new Node()) {
    this.head = head;
  }
  append(value) {
    const size = this.size();
    let current = this.head;
    for (let index = 0; index < size; index++) {
      if (current.next == null) current.next = new Node(value);
      else current = current.next;
    }
  }
  prepend(value) {
    let newFirst = new Node(value);
    newFirst.next = this.head;
    this.head = newFirst;
  }
  head() {
    return this.head;
  }
  tail() {
    let current = this.head;
    while (current.next != null) {
      current = current.next;
    }
    return current;
  }
  at(index) {
    const size = this.size();
    if (index < 0 || index > size) return null;
    else {
      let current = this.head;
      for (let i = 0; index < size; i++) {
        if (i == index) return current;
        else current = current.next;
      }
    }
  }
//   
  pop() {
    let pre = new Node()
    pre.next = this.head
    let preNode = pre
    let current = this.head
    while(current.next != null) {
        preNode = current
        current = current.next
    }
    preNode.next = null
    this.head = pre.next
    return current
  }
  contain(value) {
    let current = this.head;
    while (current != null) {
      if (current.value == value) return true;
      current = current.next;
    }
    return false;
  }
  toString() {
    let current = this.head;
    let print = "";
    while (current != null) {
      print = print + `( ${current.value} ) -> `;
      current = current.next;
    }
    return print + "null";
  }
  size() {
    let size = 1;
    let current = this.head;
    while (current.next != null) {
      size++;
      current = current.next;
    }
    return size;
  }
}

const linkList = new LinkedList(new Node("head"));

console.log(linkList.pop())
console.log(linkList.toString());

