//  Given an array of length N. Peak element is defined as the element greater than both of its neighbors.
//  Formally, if ‘arr[i]’ is the peak element, ‘arr[i – 1]’ < ‘arr[i]’ and ‘arr[i + 1]’ < ‘arr[i]’.
//  Find the index(0-based) of a peak element in the array. If there are multiple peak numbers,
//  return the index of any peak number.

// Brute force
// const findPeakElement = (arr) => {
//   if (arr.length === 0) return 0

//   for (let i = 0; i < arr.length; i++) {
//     if (i === arr.length - 1 && arr[i - 1] <= arr[i]) {
//       return i
//     }
//     if (i === 0 && arr[i] >= arr[i + 1]) {
//       return 0
//     }
//     if (arr[i - 1] <= arr[i] && arr[i] >= arr[i + 1]) {
//       return i
//     }
//   }
// }

const binarySearch = (arr, low, high) => {
  if (low > high) return -1
  const mid = Math.floor((high + low) / 2)

  if (arr[0] > arr[1] || arr.length === 0) return 0
  if (arr[arr.length - 2] < arr[arr.length - 1]) return arr.length - 1
  if (arr[mid - 1] <= arr[mid] && arr[mid] >= arr[mid + 1]) {
    return mid
  } else if (arr[mid] > arr[mid - 1]) {
    return binarySearch(arr, mid + 1, high)
  } else {
    return binarySearch(arr, low, mid - 1)
  }
}

const findPeakElementByBs = (arr) => {
  const res = binarySearch(arr, 1, arr.length - 2)
  console.log(res, 'res')
}

// findPeakElementByBs([1, 2, 3, 4, 5, 6, 7, 8, 5, 1])
findPeakElementByBs([1, 2, 1, 3, 4, 2])
// console.log(findPeakElement([3, 2, 1]))
