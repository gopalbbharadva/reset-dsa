// Problem Statement: You are given a sorted array arr of distinct values and a target value x.
// You need to search for the index of the target value in the array.

const binarySearch = (arr, low, high, t) => {
  let mid = Math.floor((high + low) / 2)
  if (low > high) {
    return mid + 1
  }
  if (arr[mid] === t) {
    return mid
  } else if (arr[mid] > t) {
    return binarySearch(arr, low, mid - 1, t)
  } else {
    return binarySearch(arr, mid + 1, high, t)
  }
}

const insertElementIndex = (arr, t) => {
  const result = binarySearch(arr, 0, arr.length - 1, t)
  console.log(result, 'result')
}

insertElementIndex([1, 2, 4, 5, 7, 9], 8)
