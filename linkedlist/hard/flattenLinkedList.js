class Node {
  constructor(data) {
    this.data = data
    this.child = null
    this.next = null
  }
}

let head = null

const n1 = new Node(4)
const n2 = new Node(5)

const n3 = new Node(1)
const n4 = new Node(2)
const n5 = new Node(3)

const n6 = new Node(8)
const n7 = new Node(10)

n1.next = n3

n1.child = n2

n3.next = n6

n3.child = n4

n4.child = n5

n6.child = n7
head = n1

const merge = (fHead, sHead) => {
  let l1 = fHead,
    l2 = sHead
  let dummyNode = new Node(-1),
    res = dummyNode

  while (l1 !== null && l2 !== null) {
    if (l1.data < l2.data) {
      res.child = l1
      res = l1
      l1 = l1.child
    } else {
      res.child = l2
      res = l2
      l2 = l2.child
    }
  }

  if (l1) {
    res.child = l1
  } else {
    res.child = l2
  }

  if (dummyNode.child) dummyNode.child.next = null
  return dummyNode.child
}

const helperRecursion = (head) => {
  // base condition : go till last node horizontally,
  // once we reach at null we will directly return current head
  if (head === null) {
    return head
  }
  // from base condition we will get updated head
  // that we will use as input in merging with other list
  else {
    let mergedHead = helperRecursion(head.next)
    // this function will take current and returned head and merge both of them
    return merge(head, mergedHead)
  }
}

const flattenLinkedList = () => {
  head = helperRecursion(head)
  while (head) {
    console.log(head.data, 'data')
    head = head.data
  }
  console.log(head, 'head')
}

flattenLinkedList(head)
