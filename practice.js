// Problem 1 : Simple binary search

// const binaryse

// const searchAnElement = (arr, t) => {
//   let low = 0,
//     high = arr.length - 1,
//     mid = 0

//   while (low < high) {
//     mid = Math.floor((high + low) / 2)
//     console.log('loop')
//     if (arr[mid] === t) {
//       return true
//     } else if (arr[mid] > t) {
//       high - mid - 1
//     } else {
//       low = mid + 1
//     }
//   }
//   return false
//   // const res= binarySearch(arr)
// }

// console.log(searchAnElement([1, 2, 3, 4, 5], 40), 'result')

// Problem 2 : find the lower bound

// const findLowerBound = (arr, t) => {
//   let low = 0,
//     high = arr.length - 1,
//     mid = 0,
//     ans = arr.length-1
//   while (low < high) {
//     mid = Math.floor((high + low) / 2)
//     if (arr[mid] >= t) {
//       ans = mid
//       high = mid - 1
//     } else {
//       low = mid + 1
//     }
//   }
//   return ans
// }

// console.log(findLowerBound([3, 5, 8, 15, 19], 9), 'ans')

// Problem 3 : find upper bound
// const findUpperBound = (arr, t) => {
//   let low = 0,
//     high = arr.length - 1,
//     mid = 0,
//     ans = arr.length - 1
//   while (low <= high) {
//     mid = Math.floor((high + low) / 2)
//     if (arr[mid] > t) {
//       ans = mid
//       high = mid - 1
//     } else {
//       low = mid + 1
//     }
//   }
//   return ans
// }

// console.log(findUpperBound([1, 2, 3, 4, 5], 2), 'res')

// Problem 4: Search insert position
// const findIndex = (arr, t) => {
//   let low = 0,
//     high = arr.length - 1,
//     mid = 0,
//     ans = 0
//   while (low <= high) {
//     mid = Math.floor((high + low) / 2)
//     if (arr[mid] >= t) {
//       ans = mid
//       high = mid - 1
//     } else {
//       low = mid + 1
//     }
//   }
//   return ans
// }

// console.log(findIndex([1, 2, 4, 6], 2),'res')

// Problem 5: Floor of the sorted array
// largest element in the array which is less than or equal to the target

// const floorOfTheArray = (arr, t) => {
//   let low = 0,
//     high = arr.length - 1,
//     mid = 0,
//     ans = 0
//   while (low <= high) {
//     mid = Math.floor((high + low) / 2)
//     if (arr[mid] <= t) {
//       ans = arr[mid]
//       low = mid + 1
//     } else {
//       high = mid - 1
//     }
//   }
//   return ans
// }
// console.log(floorOfTheArray([1, 2, 4, 5, 6], 3), 'res')

// Problem 5: Ceil of the sorted array
// Ceil : smallest element in the array which is greater than or equal to the target
// const floorOfTheArray = (arr, t) => {
//   let low = 0,
//     high = arr.length - 1,
//     mid = 0,
//     ans = 0
//   while (low <= high) {
//     mid = Math.floor((high + low) / 2)
//     console.log(mid, 'mid')
//     if (arr[mid] >= t) {
//       console.log('if')
//       ans = arr[mid]
//       high = mid - 1
//     } else {
//       low = mid + 1
//     }
//   }
//   return ans
// }
// console.log(floorOfTheArray([1, 2, 4, 5, 6], 5), 'res')

// Problem 6 : First and Last Occurrences in Array

// const findFirstOccurrence = (arr, t) => {
//   let low = 0,
//     high = arr.length - 1,
//     mid = 0,
//     ans = -1
//   while (low <= high) {
//     mid = Math.floor((high + low) / 2)
//     if (arr[mid] === t) {
//       ans = mid
//       high = mid - 1
//     } else if (arr[mid] > t) {
//       high = mid - 1
//     } else {
//       low = mid + 1
//     }
//   }
//   return ans
// }

// const findLastOccurrence = (arr, t) => {
//   let low = 0,
//     high = arr.length - 1,
//     mid = 0,
//     ans = -1

//   while (low <= high) {
//     mid = Math.floor((high + low) / 2)
//     if (arr[mid] === t) {
//       ans = mid
//       low = mid + 1
//     } else if (arr[mid] < t) {
//       low = mid + 1
//     } else {
//       high = mid - 1
//     }
//   }
//   return ans
// }

// console.log(findFirstOccurrence([1, 2, 3, 3, 3, 4, 5, 6], 3), 'res')
// console.log(findLastOccurrence([1, 2, 3, 3, 3, 4, 5, 6], 3), 'res')

// Problem 7: Count Occurrences in Sorted Array

// const countOccurrences = (arr, t) => {
//   const firstOccurrenceIndex = findFirstOccurrence(arr, t)
//   const lastOccurrenceIndex = findLastOccurrence(arr, t)
//   return lastOccurrenceIndex - firstOccurrenceIndex + 1
// }

// console.log(countOccurrences([2, 2, 3, 3, 3, 3], 3), 'res')

// Problem 8 : Search Element in a Rotated Sorted Array

// const searchElement = (arr, t) => {
//   let high = arr.length - 1,
//     low = 0,
//     mid = -1
//   ans = -1
//   while (low <= high) {
//     console.log('loop')
//     mid = Math.floor((high + low) / 2)
//     if (arr[mid] === t) {
//       ans = mid
//       return ans
//     }
//     // checking if left part of the array is sorted or not?
//     else if (arr[low] <= arr[mid]) {
//       // checking the element is in the left part or not
//       if (arr[low] <= t && arr[mid] >= t) {
//         high = mid - 1
//       } else {
//         low = mid + 1
//       }
//     }
//     // right part is sorted
//     else {
//       // checking if element is in the right sorted part or not?
//       if (arr[mid] <= t && arr[high] >= t) {
//         low = mid + 1
//       } else {
//         high = mid - 1
//       }
//     }
//   }
//   return ans
// }

// console.log(searchElement([4, 5, 6, 7, 0, 1, 2], 0), 'res')

// Problem 9 : Search Element in Rotated Sorted Array II

// const findElementWithDuplicateValues = (arr, t) => {
//   let high = arr.length - 1,
//     low = 0,
//     mid = -1
//   ans = -1
//   while (low <= high) {
//     // console.log('loop')
//     mid = Math.floor((high + low) / 2)
//     // console.log(mid, 'mid')
//     // console.log(arr[mid], 'mid value')
//     if (arr[mid] === t) return true
//     if (arr[mid] === arr[low] && arr[mid] === arr[high]) {
//       low += 1
//       high -= 1
//     } else if (arr[low] <= arr[mid]) {
//       // console.log('arr left part sorted')
//       if (arr[low] <= t && arr[mid] >= t) {
//         high = mid - 1
//       } else {
//         low = mid + 1
//       }
//     } else {
//       console.log('right part is sorted')
//       if (arr[mid] <= t && arr[high] >= t) {
//         // console.log('right')
//         low = mid + 1
//       } else {
//         // console.log('left')
//         high = mid - 1
//       }
//     }
//   }
//   return false
// }

// console.log(findElementWithDuplicateValues([5, 6, 1, 2, 3, 3, 3, 4], 30), 'res')

// Problem 10 :
// const findMinimumInSortedArray = (arr) => {
//   let high = arr.length - 1,
//     low = 0,
//     mid = -1
//   ans = 0
//   while (low <= high) {
//     // console.log('loop')
//     mid = Math.floor((high + low) / 2)
//     // console.log(mid, 'mid')
//     // Left part is sorted
//     if (arr[low] <= arr[mid]) {
//       // console.log('if')
//       // if our low index value is less than current minimum value then we will update ans
//       if (arr[low] <= ans) {
//         ans = arr[low]
//       }
//       low = mid + 1
//     } else {
//       console.log('else')
//       if (arr[mid] <= ans) {
//         ans = arr[mid]
//       }
//       high = mid - 1
//     }
//   }
//   return ans
// }

// console.log(findMinimumInSortedArray([4, 5, 0, 1, 2, 3]), 'res')

// Problem 11 :  Single Element in a Sorted Array

const singleElement = (arr) => {
  let high = arr.length - 1,
    low = 0,
    mid = -1
  while (low <= high) {
    mid = Math.floor((high + low) / 2)
    if (arr[mid] !== arr[mid - 1] && arr[mid] !== arr[mid + 1]) {
      console.log('if')
      return arr[mid]
    }
    // mid is at even index then single elem is in the left half
    else if (
      (mid % 2 === 0 && arr[mid] !== arr[mid + 1]) ||
      (mid % 2 !== 0 && arr[mid] === arr[mid + 1])
    ) {
      console.log('else if')
      high = mid - 1
    } else {
      console.log('else')
      low = mid + 1
    }
  }
}

console.log(singleElement([1, 1, 2, 3, 3, 4, 4]), 'res')
