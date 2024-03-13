// Problem Statement: Given an array of N integers. Every number in the array except one appears twice.
// Find the single number in the array.

// Brute force approach
const findSingleElement = (arr) => {
  const map = new Map()
  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], map.get(arr[i]) + 1 || 1)
  }

  for ([key, value] of map) {
    if (value === 1) {
      return key
    }
  }
}


// const res = findSingleElement([1, 1, 2, 2, 3, 3, 4, 4, 5])
// console.log(res, 'res')
