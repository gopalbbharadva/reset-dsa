// Problem Statement: Given a sorted array of N integers and an integer x,
// write a program to find the lower bound of x.

// What is lower bound:
// The lower bound algorithm finds the first or the smallest index in a
// sorted array where the value at that index is greater than or equal to a given key i.e. x.

// The lower bound is the smallest index, ind, where arr[ind] >= x.
// But if any such index is not found, the lower bound algorithm returns n i.e. size of the given array.

const binarySearch = (arr, l, h, t, ans) => {
  const mid = Math.floor((h + l) / 2)
  let temp = ans
  if (l > h) {
    return temp
  } else {
    if (arr[mid] >= t) {
      temp = mid
      return binarySearch(arr, l, mid - 1, t, temp)
    } else {
      return binarySearch(arr, mid + 1, h, t, temp)
    }
  }
}

const lowerBound = (arr, target) => {
  const result = binarySearch(arr, 0, arr.length - 1, target, arr.length)
  console.log(result, 'result')
}

lowerBound([1, 2, 2, 3, 3, 5], 8) // out put index=3
