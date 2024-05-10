class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

let head = null

const n1 = new Node(1)
const n2 = new Node(2)
const n3 = new Node(3)
const n4 = new Node(2)
const n5 = new Node(1)

head = n1
n1.next = n2
n2.next = n3
n3.next = n4
n4.next = n5

const reversedLinkedList = (head) => {
  console.log(head, 'head')
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

const checkPalindrome = () => {
  let slow = head,
    fast = head
  // 1. Find the middle and set the slow pointer
  while (fast.next !== null && fast.next.next !== null) {
    fast = fast.next.next
    slow = slow.next
  }
  // 2. Reverse the second half
  const newHead = reversedLinkedList(slow.next)
  let first = head,
    second = newHead
  // 3. Compare and check for palindrome
  while (second) {
    if (first.data !== second.data) {
      reversedLinkedList(second.data)
      return false
    }
    first = first.next
    second = second.next
  }
  reversedLinkedList(newHead)
  return true
}
console.log(checkPalindrome())

// console.log(reversedLinkedList(head))
