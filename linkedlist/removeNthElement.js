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

const removeNThElement = (n) => {
  let temp = head,
    current = head
  count = 0
  //   Calculating the length of the list
  while (temp) {
    temp = temp.next
    count++
  }

  // if the length and n both are same then just return the second element
  if (count === n) {
    head = head.next
    return head
  }

  // Round a loop till count-n-1 to reach to the one position previous from end of list.
  for (let i = 0; i < count - n - 1; i++) {
    console.log('first')
    current = current.next
  }
  const tempNode = current.next
  current.next = current.next.next
  return head
}

console.log(removeNThElement(3))
