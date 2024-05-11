class Node {
  constructor(url) {
    this.data = url
    this.next = null
    this.prev = null
  }
}
let currentNode = null

class Browser {
  constructor(homepage) {
    const node = new Node(homepage)
    this.currentNode = node
  }

  visitPage(url) {
    if (this.currentNode) {
      let newNode = new Node(url)
      newNode.prev = currentNode
      currentNode.next = newNode
      currentNode = newNode
    }
  }

  back(steps) {
    while (steps) {
      if (currentNode.prev) {
        currentNode = currentNode.prev
      } else {
        break
      }
      steps--
    }
    return currentNode.data
  }

  front(steps) {
    while (steps) {
      if (currentNode.next) {
        currentNode = currentNode.next
      } else {
        break
      }
      steps--
    }
    return currentNode.data
  }
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
