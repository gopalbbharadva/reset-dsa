class TreeNode {
  constructor(x) {
    this.data = x
    this.left = null
    this.right = null
  }
}

let n1 = new TreeNode(8)
let n2 = new TreeNode(6)
let n3 = new TreeNode(5)
let n4 = new TreeNode(7)
let n5 = new TreeNode(10)
let n6 = new TreeNode(9)
let n7 = new TreeNode(11)

let root = n1
root.left = n2
root.right = n5
root.left.left = n3
root.left.right = n4
root.right.left = n6
root.right.right = n7

const searchAnElement = (root, searchValue) => {
  let temp = root
  while (temp !== null && searchValue !== temp.data) {
    if (temp.value < searchValue) {
      temp = temp.left
    } else {
      temp = temp.right
    }
  }
  return root
}

searchAnElement(root, 10)
