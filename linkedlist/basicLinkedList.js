class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

let head = null,
  tail = null
const n1 = new Node(2)
const n2 = new Node(23)
const n3 = new Node(48)
head = n1
n1.next = n2
n2.next = n3
tail = n3
// console.log(head, 'head')

const searchFromLinkedList = (value) => {
  while (head) {
    if (head.data === value) {
      return 'found'
    }
    head = head.next
  }
  return 'not found'
}

const findLengthOfLinkedList = () => {
  count = 0
  while (head) {
    count++
    head = head.next
  }
  return count
}

const traverseLinkedList = () => {
  while (head !== null) {
    console.log(head.data, 'head')
    head = head.next
  }
}

const insertAtBeginning = (value) => {
  const newNode = new Node(value)
  newNode.next = head
  head = newNode
}

const insertAtEnd = (value) => {
  let temp = head
  console.log(head, 'head')
  if (!head) {
    head = new Node(99)
    return
  }

  const newNode = new Node(value)
  while (temp.next) {
    console.log(temp, 'temp')
    temp = temp.next
  }
  tail.next = newNode
  tail = newNode
  //   console.log(tail, 'tail')
}

// Case 1 : if position is zero or list is empty then insert it at start
//
const insertAtPositionInLinkedList = (value, position) => {
  let count = 1,
    temp = head
  let newNode = new Node(value)
  //  Case 1
  if (position === 1 || head === null) {
    newNode.next = head
    head = newNode
    return
  }
  // Go just before the position
  while (temp && count !== position - 1) {
    count++
    temp = temp.next
  }
  // link new node with the node that is after the current positioned node
  newNode.next = temp.next
  // temp node(current node) with the new node
  temp.next = newNode
}

// Deleting from beginning
const deleteFromBeginning = () => {
  let temp = head
  // If list is empty then just return
  if (head === null) return
  head = head.next
  temp.next = null
}

// Deleting from the end
const deleteFromEnd = () => {
  let temp = head
  // If list is empty then just return
  if (head === null) return
  while (temp.next.next) {
    temp = temp.next
  }
  temp.next = null
}

// Scenario 1 : check for list is empty
// Scenario 2 : if position is 0 then remove first element
// Scenario 3 : if position is last element then remove last element
const deleteFromPosition = (position) => {
  let current = head,
    prev = null
  //   Scenario 1
  if (head === null) return
  //   Scenario 2
  if (position === 0) {
    let temp = head
    head = head.next
    temp = null
    return
  }

  // Setting the positions
  // 1. set current at the position which is given
  // 2. set prev at the previous position which is given.
  for (let i = 0; i < position && current.next !== null; ++i) {
    prev = current
    current = current.next
  }
  prev.next = current.next
  current = null
}

// insertAtBeginning(56)
// insertAtEnd(33)
console.log(head, 'head')
// insertAtEnd(330)
insertAtPositionInLinkedList(69, 3)
// deleteFromBeginning()
console.log('**********')
deleteFromPosition(0)
// deleteFromEnd()
traverseLinkedList()
