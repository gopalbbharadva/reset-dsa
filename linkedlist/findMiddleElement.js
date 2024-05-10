class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

let head = null

const n1 = new Node(3)
// const n2 = new Node(4)
const n3 = new Node(5)
const n4 = new Node(6)
const n5 = new Node(7)

head = n1
n1.next = n3
n3.next = n4
n4.next = n5
// n4.next = n5

// Tortoise and hare algorithm,
const findMiddleElement = () => {
  let slow = head,
    fast = head
    // Whenever fast will reach at the end we will stop
  while (fast && slow) {
    console.log('first')
    // Moving fast two times
    fast = fast.next.next
    // Moving slow one time
    slow = slow.next
  }
  return slow
}

console.log(findMiddleElement(), 'middle')
