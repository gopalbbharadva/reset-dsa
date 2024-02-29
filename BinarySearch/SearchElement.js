// Problem statement: Given an array of integers nums which is sorted in ascending order,
// and an integer target, write a function to search target in nums. If target exists,
// then return its index. Otherwise, return -1.

const binarySearch = (arr, low, high, t) => {
  console.log(low, 'low')
  console.log(high, 'high')
  let count = 0
  if (low > high) return -1

  const md = Math.floor((high + low) / 2)
  if (t === arr[md]) {
    return md
  }
  // target is greater than the mid element
  else if (t > arr[md]) {
    return binarySearch(arr, md + 1, high, t)
  }
  // target is lower than the mid element
  else {
    console.log('selse')
    return binarySearch(arr, low, md - 1, t)
  }
}

const searchUsingBinary = (arr, target) => {
  const result = binarySearch(arr, 0, arr.length - 1, target)
  console.log(result, 'result')
}
searchUsingBinary([-1, 0, 3, 5, 9, 9, 12], 9)
