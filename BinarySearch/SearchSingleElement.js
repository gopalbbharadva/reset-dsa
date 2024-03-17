// Problem Statement: Given an array of N integers. Every number in the array except one appears twice.
// Find the single number in the array.

// Brute force approach
// const findSingleElement = (arr) => {
//   const map = new Map()
//   for (let i = 0; i < arr.length; i++) {
//     map.set(arr[i], map.get(arr[i]) + 1 || 1)
//   }

//   for ([key, value] of map) {
//     if (value === 1) {
//       return key
//     }
//   }
// }

// Brute force approach
const searchSingleElement = (arr) => {
  if (arr.length === 1) return arr[0]
  for (let i = 0; i < arr.length; i++) {
    // when single element is the first
    if (i === 0) {
      console.log('first')
      if (arr[i + 1] !== arr[i]) {
        console.log(arr[i], 'res2')
        return arr[i]
      }
    }
    // when single element is the last
    else if (i === arr.length - 1) {
      console.log('last element')
      if (arr[i - 1] !== arr[i]) {
        console.log(arr[i], 'res1')
        return arr[i]
      }
    }

    // this is the case when the single element is at middle of the array
    else {
      if (arr[i - 1] !== arr[i] && arr[i + 1] !== arr[i]) {
        console.log(arr[i], 'i')
        return arr[i]
      }
      // return arr[i]
    }
  }
}

// console.log(searchSingleElement([1, 2, 2, 4, 4]), 'res')

const binarySearch = (arr, low, high) => {
  if (arr.length === 1) return arr[0]

  const mid = Math.floor((high + low) / 2)
  if (arr[0] !== arr[1]) return arr[0]
  if (arr[arr.length - 1] !== arr[arr.length - 2]) return arr[arr.length - 1]
  if (arr[mid - 1] !== arr[mid] && arr[mid + 1] !== arr[mid]) {
    return arr[mid]
  }
  // elmn Left half
  else if (
    (mid % 2 !== 0 && arr[mid - 1] === arr[mid]) ||
    (mid % 2 === 0 && arr[mid] === arr[mid + 1])
  ) {
    return binarySearch(arr, mid + 1, high)
  }
  // elmn Right  half
  else {
    return binarySearch(arr, low, mid - 1)
  }
}

const findSingleElementUsingBS = (arr) => {
  const res = binarySearch(arr, 1, arr.length - 2)
  console.log(res, 'res')
}

findSingleElementUsingBS([1, 1, 2, 2, 3, 4, 4])

// const res = findSingleElement([1, 1, 2, 2, 3, 3, 4, 4, 5])
// console.log(res, 'res')
