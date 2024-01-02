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
const buyAndSellStockBetterApproach = (arr) => {
  let minElementIndex = arr[0]
  let minElement = arr[0]

  let maxElementIndex = 0
  let maxElement = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minElement) {
      minElement = arr[i]
      minElementIndex = i
    }
  }

  for (let j = minElementIndex; j < arr.length; j++) {
    if (arr[j] > maxElement) {
      maxElement = arr[j]
      maxElementIndex = j
    }
  }

  return maxElement - minElement
}

console.log(buyAndSellStockBetterApproach([7, 1, 5, 3, 6, 4]))
// console.log(buyAndSellStockBetterApproach([7, 6, 4, 3, 1]))
