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

// Brute Force approach
// TC: O(2n)
// SC: O(n)

// const oddEvenElement = () => {
//   let temp = head
//   let arr = []

//   // FOR ODD indexes
//   while (temp !== null && temp.next !== null) {
//     arr.push(temp.data)
//     temp = temp.next.next
//   }
//   if (temp) {
//     arr.push(temp.data)
//   }

//   // FOR EVEN indexes
//   temp = head.next
//   while (temp !== null && temp.next !== null) {
//     console.log('temp')
//     arr.push(temp.data)
//     temp = temp.next.next
//   }
//   if (temp) {
//     arr.push(temp.data)
//   }

//   //  For rearranging in existing linked list
//   temp = head
//   for (let i = 0; i < arr.length; i++) {
//     temp.data = arr[i]
//     temp = temp.next
//   }
//   return head
// }

// oddEvenElement()

// Optimal approach
// TC: O(n)
// SC: O(1)
const evenElement = () => {
  if (head.next === null || head === null) {
    return head
  }
  let even = head.next,
    odd = head,
    evenHead = head.next

  // Even will always be front of odd , so when even will reach to the last element
  // we can say that odd will also be at the last element, so checking for even only.
  while (even.next !== null && even !== null) {
    odd.next = odd.next.next
    even.next = even.next.next

    odd = odd.next
    even = even.next
  }

  //   last odd should point to the first even, that connection we are making here.
  odd.next = evenHead

  //   while (head) {
  //     head = head.next
  //   }
  return head
}
console.log(evenElement())
