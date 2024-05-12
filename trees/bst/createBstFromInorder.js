class TreeNode {
  constructor(x) {
    this.data = x
    this.left = null
    this.right = null
  }
}

const traverseInOrder = (arr, i, max) => {
  if (i === arr.length || arr[i] > max) return null
  let newNode = new TreeNode(arr[i++])
  newNode.left = traverseInOrder(arr, i, newNode.data)
  newNode.right = traverseInOrder(arr, i, max)
  return newNode
}

const createBstFromInOrder = () => {
  const i = 0
  const arr = [8, 5, 1, 7, 10, 12]
  MAX = Infinity
  const updatedRoot = traverseInOrder(arr, i, Infinity)
  console.log(updatedRoot, 'root')
}

createBstFromInOrder()
