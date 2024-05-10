class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

let head = null

const n1 = new Node(3)
const n2 = new Node(4)
const n3 = new Node(5)
const n4 = new Node(6)
const n5 = new Node(7)

head = n1
n1.next = n2
n2.next = n3
n3.next = n4
n4.next = n5

const reversedLinkedList = () => {
  let prev = null,
    temp = head,
    front = head

  while (temp) {
    front = temp.next
    temp.next = prev
    prev = temp
    temp = front
  }
  head = prev
  return head
}

console.log(reversedLinkedList())
