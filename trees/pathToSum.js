class TreeNode {
  constructor(x) {
    this.data = x
    this.left = null
    this.right = null
  }
}

let root = new TreeNode(-10)
root.left = new TreeNode(9)
root.right = new TreeNode(20)
root.right.left = new TreeNode(-15)
root.right.right = new TreeNode(-7)

const recursionCall = (root, max) => {
  if (root === null) {
    return 0
  }
  let lSum = Math.max(0, recursionCall(root.left, max))
  let rSum = Math.max(0, recursionCall(root.right, max))

  max = Math.max(max, lSum + rSum + root.data)
  return root.data + Math.max(lSum, rSum)
}

const findMaxSum = () => {
  let max = 0
  const sum = recursionCall(root, max)
  console.log(sum, 'sum')
}

findMaxSum()
