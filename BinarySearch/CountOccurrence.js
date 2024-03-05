// Problem Statement: You are given a sorted array containing N integers and a number X,
// you have to find the occurrences of X in the given array.

// Brute force approach
// const countNumberOfOccurrence = (arr, x) => {
//   let temp = 0
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === x) {
//       temp++
//     }
//   }
//   console.log(temp, 'temp')
// }

// countNumberOfOccurrence([1, 2, 3, 3, 3, 3, 5, 6], 3)

// Optimal approach

const findFloor = (arr, low, high, t, ans) => {
  if (low > high) {
    return ans
  }
  let mid = Math.floor((low + high) / 2)
  if (arr[mid] >= t) {
    if (arr[mid] === t) {
      ans = mid
    }
    return findFloor(arr, low, mid - 1, t, ans)
  } else {
    return findFloor(arr, mid + 1, high, t, ans)
  }
}

const findCeil = (arr, low, high, t, ans) => {
  if (low > high) {
    return ans
  }
  let mid = Math.floor((low + high) / 2)
  if (arr[mid] <= t) {
    if (arr[mid] === t) {
      ans = mid
    }
    return findCeil(arr, mid + 1, high, t, ans)
  } else {
    return findCeil(arr, low, mid - 1, t, ans)
  }
}

const countNumberOfOccurrence = (arr, t) => {
  const floorIndex = findFloor(arr, 0, arr.length - 1, t, -1)
  const ceilIndex = findCeil(arr, 0, arr.length - 1, t, -1)
  //   console.log(floorIndex, 'index')
  //   console.log(ceilIndex, 'ceilindex')
  if (floorIndex === -1) return 0
  return ceilIndex - floorIndex + 1
}
console.log(countNumberOfOccurrence([1, 2, 3, 3, 3, 3, 5], 39), 'log')
