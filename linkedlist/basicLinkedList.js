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
  const newNode = new Node(value)
  while (temp.next) {
    temp = temp.next
  }
  tail.next = newNode
  tail = newNode
  console.log(tail, 'tail')
}

const insertAtPositionInLinkedList = (value, position) => {
  let count = 1,
    temp = head
  const newNode = new Node(value)
  while (temp && count !== position - 1) {
    // console.log('first')
    count++
    temp = temp.next
  }
  console.log(temp, 'temp')
  newNode.next = temp.next
  temp.next = newNode
}

insertAtBeginning(56)
insertAtEnd(33)
insertAtEnd(330)
insertAtPositionInLinkedList(69, 3)
traverseLinkedList()

// console.log(findLengthOfLinkedList(), 'length')

// console.log(searchFromLinkedList(489), 'result')

// const createNode = (data) => {
//   const n2 = new Node(data)
//   return n2
// }

// console.log(n1, 'n1')
// console.log(createNode(45))
// console.log(head, 'head')
