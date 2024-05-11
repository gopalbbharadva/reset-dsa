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
// root.left.left.left = new TreeNode(90)
root.left.right = new TreeNode(5)

// Brute force approach
// const findHeightOfTheTree = (root) => {
//   let height = 0
//   if (root === null) {
//     return 0
//   }

//   let q = []
//   q.push(root)

//   while (q.length > 0) {
//     let size = q.length
//     for (let i = 0; i < size; i++) {
//       let curNode = q.shift()

//       if (curNode.left) {
//         q.push(curNode.left)
//       }

//       if (curNode.right) {
//         q.push(curNode.right)
//       }
//     }
//     height++
//   }
//   return height
// }

// console.log(findHeightOfTheTree(root))

const findHeightOfTheTree = (root) => {
  if (root === null) {
    return 0
  }
  let lh = findHeightOfTheTree(root.left)
  //   check for the binary tree is balanced tree or not
  //   if (lh === -1) return -1
  let rh = findHeightOfTheTree(root.right)
  //   if (rh === -1) return -1

  //   if (Math.abs(lh - rh) > 1) return -1

  return 1 + Math.max(lh, rh)
}

// IsTreeBalancedTree= tree is balanced if the absolute diff between left and right
// subtree is greater than 1.
const checkForBalancedTree = () => {
  if (root === null) {
    return 0
  }
  let lh = findHeightOfTheTree(root.left)
  //   check for the binary tree is balanced tree or not
  if (lh === -1) return -1
  let rh = findHeightOfTheTree(root.right)
  if (rh === -1) return -1

  if (Math.abs(lh - rh) > 1) return -1

  return 1 + Math.max(lh, rh)
}

const isTreeUnBalanced = (root) => {
  const flag = findHeightOfTheTree(root)
  console.log(flag, 'flag')
  return flag === -1 ? false : true
}

/**
 * Diameter of the tree
 * 1. diameter is basically the longest path from one node to the other node in the tree
 * 2. it's not require that it should include root node.
 */

const diameter = (root, distance) => {
  let lh, rh
  if (root === null) {
    return 0
  }

  lh = diameter(root.left, distance)
  rh = diameter(root.right, distance)
  // finding the max between the initial distance and sum of lh+rh
  distance = Math.max(distance, lh + rh)

  return 1 + Math.max(lh, rh)
}

const findDiameterOfTheTree = (root) => {
  let distance = 0
  distance = diameter(root, distance)
  console.log(distance, 'd')
}

findDiameterOfTheTree(root)

// console.log(findHeightOfTheTree(root))
