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
// const n5 = new Node(7)

head = n1
n1.next = n2
n2.next = n3
n3.next = n4
// n4.next = n5
// n5.next = n1

// TC: O(2n)
// SC: O(n)

const oddEvenElement = () => {
  let temp = head
  let arr = []

  // FOR ODD indexes
  while (temp !== null && temp.next !== null) {
    arr.push(temp.data)
    temp = temp.next.next
  }
  if (temp) {
    arr.push(temp.data)
  }

  // FOR EVEN indexes
  temp = head.next
  while (temp !== null && temp.next !== null) {
    console.log('temp')
    arr.push(temp.data)
    temp = temp.next.next
  }
  if (temp) {
    arr.push(temp.data)
  }

  //  For rearranging in existing linked list
  temp = head
  for (let i = 0; i < arr.length; i++) {
    temp.data = arr[i]
    temp = temp.next
  }
  return head
}

oddEvenElement()

// Tortoise and hare algorithm,
// const findMiddleElement = () => {
//   let slow = head,
//     fast = head
//   // Whenever fast will reach at the end we will stop
//   while (fast !== null) {
//     console.log('first')
//     // Moving fast two times
//     fast = fast.next.next
//     // Moving slow one time
//     slow = slow.next
//     if (slow === fast) return true
//   }
//   return false
// }

// console.log(findMiddleElement(), 'middle')
