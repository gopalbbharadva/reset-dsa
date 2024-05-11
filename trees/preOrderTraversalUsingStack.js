class TreeNode {
  constructor(x) {
    this.data = x
    this.left = null
    this.right = null
  }
}

let root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
root.left.left = new TreeNode(4)
root.left.right = new TreeNode(5)

class Solution {
  preOrder(root) {
    let preOrderArr = []
    if (root === null) {
      return preOrderArr
    }
    let stack = []

    stack.push(root)

    while (stack.length > 0) {
      let temp = stack.pop()
      preOrderArr.push(temp.data)

      if (temp.right) {
        stack.push(temp.right)
      }
      
      if (temp.left) {
        stack.push(temp.left)
      }
    }
    return preOrderArr
  }
}

let sol = new Solution()

// Getting the preorder traversal
let result = sol.preOrder(root)

// Displaying the preorder traversal result
console.log('Preorder Traversal: ' + result.join(' '))
