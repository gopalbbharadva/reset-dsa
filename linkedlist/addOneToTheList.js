class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

let head = null

const n1 = new Node(9)
const n2 = new Node(9)
const n3 = new Node(9)
// const n4 = new Node(2)
// const n5 = new Node(1)

head = n1
n1.next = n2
n2.next = n3
// n3.next = n4
// n4.next = n5
const reversedLinkedList = (head) => {
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

const addOneToTheList = () => {
  let carry = 1
  head = reversedLinkedList(head)
  let temp = head
  while (temp) {
    temp.data = temp.data + carry
    if (temp.data < 10) {
      carry = 0
    } else {
      temp.data = 0
      carry = 1
    }
    temp = temp.next
  }
  if (carry) {
    const newNode = new Node(carry)
    newNode.next = head
    return newNode
  }
  head = reversedLinkedList(head)
  return head
}

console.log(addOneToTheList())
