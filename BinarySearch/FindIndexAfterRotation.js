// Problem Statement: Given an integer array arr of size N,
// sorted in ascending order (with distinct values) and a target value k.
// Now the array is rotated at some pivot point unknown to you.
// Find the index at which k is present and if k is not present return -1.

/**
 * First we will try and find out which part of the array is sorted
 * Then we will check in that part if our element is there or not
 * if it is then we will go into that part otherwise we will go in other part.
 */

const binarySearch = (arr, low, high, t) => {
  if (low > high) return -1
  const mid = Math.floor((high + low) / 2)

  // target found
  if (arr[mid] === t) return mid
  // left part sorted
  else if (arr[low] <= arr[mid]) {
    if (arr[low] <= t && t <= arr[mid]) {
      // check if target is in left sorted part
      return binarySearch(arr, low, mid - 1, t)
    } else {
      return binarySearch(arr, mid + 1, high, t)
    }
  }
  // right part sorted
  else {
    // check if target is in right sorted part
    if (arr[mid] <= t && t <= arr[high]) {
      return binarySearch(arr, mid + 1, high, t)
    } else {
      return binarySearch(arr, low, mid - 1, t)
    }
  }
}

const findIndexAfterRotation = (arr, t) => {
  const res = binarySearch(arr, 0, arr.length - 1, t)
  console.log(res, 'res')
  return res
}

findIndexAfterRotation([4, 4, 5, 6, 7, 1, 2, 3, 4], 4)
