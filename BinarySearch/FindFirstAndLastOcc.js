// Problem Statement: Given a sorted array arr of n integers and a target value k.
// Write a program to find the indices of the first and the last occurrences of the target value. If the target is not found then return -1 as indices.

//   console.log(low, 'low')
//   console.log(mid, 'mid')
//   console.log(high, 'high')
// const binarySearch = (arr, low, high, t) => {}

const findFirstOccurrence = (arr, low, high, t, ans) => {
  if (low > high) return ans
  const mid = Math.floor((high + low) / 2)
  if (arr[mid] >= t) {
    if (arr[mid] === t) {
      ans = mid
    }
    return findFirstOccurrence(arr, low, mid - 1, t, ans)
  } else {
    return findFirstOccurrence(arr, mid + 1, high, t, ans)
  }
}

const findLastOccurrence = (arr, low, high, t, ans) => {
  if (low > high) return ans
  const mid = Math.floor((high + low) / 2)

  if (arr[mid] <= t) {
    if (arr[mid] === t) ans = mid
    return findLastOccurrence(arr, mid + 1, high, t, ans)
  } else {
    return findLastOccurrence(arr, low, mid - 1, t, ans)
  }
}

const findFirstAndLastOccurrenceOfX = (arr, t) => {
  const firstOccurrenceIndex = findFirstOccurrence(
    arr,
    0,
    arr.length - 1,
    t,
    -1
  )
  const lastOccurrenceIndex = findLastOccurrence(arr, 0, arr.length - 1, t, -1)
  console.log(firstOccurrenceIndex, 'findFirst')
  console.log(lastOccurrenceIndex, 'findLast')
}

// findFirstAndLastOccurrenceOfX([2, 4, 6, 8, 8, 8, 8, 8, 8, 11, 13], 6)
findFirstAndLastOccurrenceOfX([2, 4, 4, 4, 4, 5, 5, 6, 6, 11, 13], 1)
// findFirstAndLastOccurrenceOfX([0, 0, 1, 1, 2, 2, 2, 2], 0)
