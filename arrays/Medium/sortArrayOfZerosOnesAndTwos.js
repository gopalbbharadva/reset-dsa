// Problem Statement: Given an array consisting of only 0s, 1s, and 2s.
// Write a program to in-place sort the array without using inbuilt sort functions.
//  ( Expected: Single pass-O(N) and constant space)

// Input : [1,0,0,2,1,2]
// Output : [0,0,1,1,2,2]

/**
 * {0:2,1:2,2:2}
 */

// Better approach
// const sortArrayOfZerosOnesAndTwos = (arr) => {
//   const temp = Array(3).fill(0)
//   for (let i = 0; i < arr.length; i++) {
//     temp[arr[i]]++
//   }

//   for (let i = 0; i < temp[0]; i++) {
//     arr[i] = 0
//   }

//   console.log(temp[1])
//   for (let i = temp[0]; i < temp[0] + temp[1]; i++) {
//     arr[i] = 1
//   }

//   for (let i = temp[0] + temp[1]; i < temp[0] + temp[1] + temp[2]; i++) {
//     arr[i] = 2
//   }
// }

// sortArrayOfZerosOnesAndTwos([1, 0, 0, 2, 1, 2, 0, 0, 0])

// Optimal approach
const sortArrayOfZerosOnesAndTwosWithDNF = (arr) => {
  let low = 0,
    mid = 0,
    high = arr.length - 1

  while (mid <= high) {
    if (arr[mid] === 0) {
      ;[arr[low], arr[mid]] = [arr[mid], arr[low]]
      low++
      mid++
    } else if (arr[mid] === 1) {
      mid++
    } else {
      ;[arr[mid], arr[high]] = [arr[high], arr[mid]]
      high--
    }
  }
  return arr
}

console.log(sortArrayOfZerosOnesAndTwosWithDNF([0, 0, 0, 2, 1, 2, 0, 0]))
