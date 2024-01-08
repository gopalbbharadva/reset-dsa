// Problem Statement: You are given an array of prices where prices[i] is
// the price of a given stock on an ith day.

// Brute force approach
// const buyAndSellStock = (arr) => {
//   let diff = 0
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 1; j < arr.length; j++) {
//       if (arr[j] - arr[i] > diff) {
//         diff = arr[j] - arr[i]
//       }
//     }
//   }
//   return diff
// }

// buyAndSellStock([[7, 6, 4, 3, 1]])
// buyAndSellStock([7, 1, 5, 3, 6, 4])

// Better approach
// const buyAndSellStockBetterApproach = (arr) => {
//   let minElementIndex = 0
//   let minElement = arr[0]

//   let maxElementIndex = 0
//   let maxElement = 0
//   if (arr.length === 1) return 0
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < minElement) {
//       minElement = arr[i]
//       minElementIndex = i
//     }
//   }

//   for (let j = minElementIndex; j < arr.length; j++) {
//     if (arr[j] > maxElement) {
//       maxElement = arr[j]
//       maxElementIndex = j
//     }
//   }

//   return maxElement - minElement
// }
// console.log(buyAndSellStockBetterApproach([7, 1, 5, 3, 6, 4]))
// console.log(buyAndSellStockBetterApproach([2, 4, 1]))

// Optimal approach with single traversal
const buyAndSellStockOptimal = (arr) => {
  let leftPointer = 0
  let rightPointer = 1
  let profit = 0
  while (rightPointer < arr.length) {
    if (arr[leftPointer] >= arr[rightPointer]) {
      leftPointer = rightPointer
      rightPointer++
    } else {
      const temp = arr[rightPointer] - arr[leftPointer]
      rightPointer++
      if (temp > profit) {
        profit = temp
      }
    }
  }
  return profit
}

buyAndSellStockOptimal([1, 2, 4, 2, 5, 7, 2, 4, 9, 0, 9])
