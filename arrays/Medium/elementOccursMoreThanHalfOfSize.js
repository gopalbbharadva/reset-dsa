// Problem Statement: Given an array of N integers, write a program to return
// an element that occurs more than N/2 times in the given array.
// You may consider that such an element always exists in the array.

// Input:  N = 10, arr = [4,4,2,4,3,4,4,3,2,4]
// Output: 4

// Brute force approach
// const numberMoreThanHalfOfTheArraySize = (arr) => {
//   let result = 0
//   for (let i = 0; i < arr.length; i++) {
//     let temp = 1
//     for (let j = 1; j < arr.length; j++) {
//       if (arr[j] === arr[i]) {
//         temp++
//       }
//     }

//     if (temp > Math.floor(arr.length / 2)) {
//       result = arr[i]
//     }
//   }
//   return result
// }

// numberMoreThanHalfOfTheArraySize([2, 2, 3, 2, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])

// Better approach
// const numberMoreThanHalfOfTheArraySizeBetterApproach = (arr) => {
//   const map = new Map()
//   for (let i = 0; i < arr.length; i++) {
//     if (map.has(arr[i])) {
//       map.set(arr[i], map.get(arr[i]) + 1)
//     } else {
//       map.set(arr[i], 1)
//     }
//   }
//   for (let [key, value] of map) {
//     if (value > Math.floor(arr.length) / 2) {
//       return key
//     }
//   }
// }

// numberMoreThanHalfOfTheArraySizeBetterApproach([1, 3, 1, 3, 3, 3])

// Optimal approach, Moore's algorithm
const elementOccurrenceUsingMooreAlgorithm = (arr) => {
  let element = arr[0],
    count = 0
  // checking for scenario where we have majority element in the array
  for (let i = 0; i < arr.length; i++) {
    if (count === 0) {
      count = 1
      element = arr[i]
    } else if (arr[i] === element) {
      count++
    } else {
      count--
    }
  }

  /**
   * here we are confirming that whatever element we got
   * is the major element or not?
   */
  let count2 = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      count2++
    }
  }

  if (count2 > Math.floor(arr.length / 2)) return element
  return -1
  //   console.log(element, 'element')
  //   console.log(count, 'count')
}

console.log(elementOccurrenceUsingMooreAlgorithm([2, 2, 1, 1, 1, 2, 2]))
