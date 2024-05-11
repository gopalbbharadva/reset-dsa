class Node {
  constructor(data) {
    this.data = data
    this.next = null
    this.random = null
  }
}

let head = null

const n1 = new Node(4)
const n2 = new Node(5)
const n3 = new Node(1)
const n4 = new Node(2)

head = n1
n1.next = n2
n1.random = null

n2.next = n3
n2.random = n1

n3.next = n4
n3.random = n2

n4.random = n3

const addNodesInBetween = () => {
  let temp = head
  while (temp !== null) {
    // creating new node
    let newNode = new Node(temp.data)
    // linking new node to the temp's next
    newNode.next = temp.next
    // linking temp to new node
    temp.next = newNode
    // forwarding temp 2 times as we added new node in between of our actual list
    temp = temp.next.next
  }
}

const assignRandomPointers = () => {
  let temp = head

  while (temp) {
    // copyHead is the starting point of copied nodes that we added in the list
    let copyHead = temp.next
    // if temp.random's is not null then then link temp's random to copied random
    if (temp.random) {
      copyHead.random = temp.random.next
    }
    // if temp's random is null then just assign null to copied node's random
    else {
      copyHead.random = null
    }
    // move temp by 2 times as we added copied node in between.
    temp = temp.next.next
  }
}

const createNewList = (head) => {
  let dummyNode = new Node(-1),
    temp = head,
    // res is the pointer for keeping track of nodes in newly copied list
    res = dummyNode

  while (temp) {
    // linking res to the copied node
    res.next = temp.next
    // after linking moving res to copied node
    res = res.next
    // re arranging link of temp
    temp.next = temp.next.next
    // forwarding temp by one place
    temp = temp.next
  }
  return dummyNode.next
}

const cloneList = (head) => {
  addNodesInBetween()
  assignRandomPointers()
  head = createNewList(head)
  while (head) {
    console.log(head.data, 'data((((')
    head = head.next
  }
}
cloneList(head)
