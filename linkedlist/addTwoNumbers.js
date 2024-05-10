class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}
let head1 = null,
  head2 = null
const n1 = new Node(3)
const n2 = new Node(9)
head1 = n1
n1.next = n2

const n3 = new Node(2)
const n4 = new Node(7)
const n5 = new Node(4)
head2 = n3
n3.next = n4
n4.next = n5

const addTwoNumbers = (h1, h2) => {
  let dummyNode = new Node(-1)
  let current = dummyNode,
    carry = 0,
    sum = 0
  let p1 = h1,
    p2 = h2

  while (p1 || p2) {
    sum = carry
    if (p1) {
      sum += p1.data
    }
    if (p2) {
      sum += p2.data
    }
    carry = parseInt(sum / 10)
    const newNode = new Node(sum % 10)
    current.next = newNode
    current = current.next
    if (p1) p1 = p1.next
    if (p2) p2 = p2.next
    console.log(carry, 'carry')
  }
  if (carry) {
    const newNode = new Node(carry)
    current.next = newNode
    current = current.next
  }
  while (dummyNode) {
    console.log(dummyNode.data, 'head')
    dummyNode = dummyNode.next
  }
  //   console.log(dummyNode, 'node')
  //   return dummyNode.next.data
  //   console.log(dummyNode.next, 'node')
}

console.log(addTwoNumbers(head1, head2))
