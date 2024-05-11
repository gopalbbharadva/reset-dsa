class TreeNode {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

const root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
root.left.left = new TreeNode(4)
root.left.right = new TreeNode(5)

const preOrderTraversal = (root) => {
  if (root === null) {
    return null
  }
  console.log(root.data)
  preOrderTraversal(root.left)
  preOrderTraversal(root.right)
}

const inOrderTraversal = (root) => {
  if (root === null) {
    return null
  }
  inOrderTraversal(root.left)
  console.log(root.data)
  inOrderTraversal(root.right)
}

const postOrderTraversal = (root) => {
  if (root === null) {
    return null
  }
  postOrderTraversal(root.left)
  postOrderTraversal(root.right)
  console.log(root.data)
}

postOrderTraversal(root)
