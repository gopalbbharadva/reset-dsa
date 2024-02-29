// Problem Statement: Given a sorted array of N integers and an integer x,
// write a program to find the upper bound of x.

// The upper bound algorithm finds the first or the smallest index in a
// sorted array where the value at that index is greater than the given key i.e. x.

// The upper bound is the smallest index, ind, where arr[ind] > x.

// But if any such index is not found, the upper bound algorithm returns n i.e.
// size of the given array. The main difference between the lower and upper bound is in the condition.
// For the lower bound the condition was arr[ind] >= x and here, in the case of the upper bound,
// it is arr[ind] > x.

const binarySearch = (arr, l, h, t, ans) => {
  let temp = ans
  const mid = Math.floor((l + h) / 2)
  if (l > h) {
    return temp
  } else if (arr[mid] > t) {
    temp = mid
    return binarySearch(arr, l, mid - 1, t, temp)
  } else {
    return binarySearch(arr, mid + 1, h, t, temp)
  }
}

const upperBound = (arr, t) => {
  const result = binarySearch(arr, 0, arr.length - 1, t, (ans = arr.length))
  console.log(result, 'result')
}

upperBound([2, 4, 6, 7], 5)
