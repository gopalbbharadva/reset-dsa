// Kadane’s Algorithm : Maximum Subarray Sum in an Array
// Problem Statement: Given an integer array arr,
// find the contiguous subarray (containing at least one number) which
// has the largest sum and returns its sum and prints the subarray.

// Input: arr = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6

// Brute-Force approach
// const findMaximumSubArray = (arr) => {
//   let sum = 0
//   for (let i = 0; i < arr.length; i++) {
//     for (j = 0; j < arr.length; j++) {
//       let temp = 0
//       for (let k = i; k <= j; k++) {
//         temp += arr[k]
//       }
//       if (temp > sum) {
//         sum = temp
//       }
//     }
//   }
//   return sum
// }

// console.log(findMaximumSubArray([-2, 1, -2, 4, -1, 2, 1, -5, 4]))

// Better approach
// const findMaximumSubArrayUsingBetterApproach = (arr) => {
//   let sum = 0
//   for (let i = 0; i < arr.length - 1; i++) {
//     let temp = 0
//     for (j = i; j < arr.length; j++) {
//       temp += arr[j]
//       if (temp > sum) {
//         sum = temp
//       }
//     }
//   }
//   return sum
// }
// console.log(
//   findMaximumSubArrayUsingBetterApproach([-2, 1, -2, 4, -1, 2, 1, -5, 4])
// )

// Optimal approach
const findMaximumSubArrayWithOptimalApproach = (arr) => {
  let sum = Number.MIN_SAFE_INTEGER
  let temp = 0
  let start = 0,
    end = 0
  for (let i = 0; i < arr.length; i++) {
    if (temp === 0) start = i
    temp += arr[i]
    if (temp > sum) {
      end = i
      sum = temp
    }
    if (temp < 0) {
      temp = 0
    }
  }
  return sum
}
findMaximumSubArrayWithOptimalApproach([-2, 1, -3, 4, -1, 2, 1, -5, 4])
