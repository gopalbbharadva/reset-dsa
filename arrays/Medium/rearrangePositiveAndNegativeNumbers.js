// Problem:  Rearrange Array Elements by Sign
// Input: arr[] = {1,2,-4,-5}, N = 4
// Output:[1 -4 2 -5]

// Brute force
// const rearrangePositiveAndNegativeNumbers = (arr) => {
//   let pos = [],
//     neg = []
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//       neg.push(arr[i])
//     } else {
//       pos.push(arr[i])
//     }
//   }

//   for (let i = 0; i < arr.length / 2; i++) {
//     arr[2 * i] = pos[i]
//     arr[2 * i + 1] = neg[i]
//   }
//   return arr
// }

// rearrangePositiveAndNegativeNumbers([1, 2, -3, -7])
const rearrangeNumbersOptimalApproach = (arr) => {
  let posIndex = 0,
    negativeIndex = 1
  let temp = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      temp[negativeIndex] = arr[i]
      negativeIndex += 2
    } else {
      temp[posIndex] = arr[i]
      posIndex += 2
    }
  }
  return temp
}

console.log(rearrangeNumbersOptimalApproach([-3, 1, 2, -1]))
