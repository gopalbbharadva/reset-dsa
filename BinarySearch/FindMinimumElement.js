// Problem Statement: Given an integer array arr of size N, sorted in
// ascending order (with distinct values). Now the array is rotated between
// 1 to N times which is unknown. Find the minimum element in the array.

const binarySearch = (arr, low, high, ans) => {
  const mid = Math.floor((high + low) / 2)
  if (low > high) return ans
  //  Left part is sorted
  else if (arr[low] <= arr[mid]) {
    if (ans >= arr[low]) {
      ans = arr[low]
    }
    return binarySearch(arr, mid + 1, high, ans)
  }
  // Right part is sorted
  else if (arr[mid] <= arr[high]) {
    if (ans >= arr[mid]) {
      ans = arr[mid]
    }
    return binarySearch(arr, low, mid - 1, ans)
  } else {
    return ans
  }
}

const findMinimumElement = (arr) => {
  const res = binarySearch(arr, 0, arr.length - 1, arr[0])
  return res
}

findMinimumElement([3, 4, 5, 6, 1, 2])
