// Problem Statement: You’re given an sorted array arr of n integers and an integer x.
// Find the floor and ceiling of x in arr[0..n-1].

// FLOOR: The floor of x is the largest element in the array which is smaller than or equal to x.
// CEIL: The ceiling of x is the smallest element in the array greater than or equal to x.

const binarySearch = (arr, low, high, t, ans) => {
  const mid = Math.floor((high + low) / 2)
  if (low > high) {
    return ans
  } else if (arr[mid] <= t) {
    ans = arr[mid]
    return binarySearch(arr, mid + 1, high, t, ans)
  } else {
    return binarySearch(arr, low, mid - 1, t, ans)
  }
}

const findFloor = (arr, t) => {
  const result = binarySearch(arr, 0, arr.length - 1, t, -1)
  console.log(result, 'result')
}

findFloor([1, 2, 4, 5], 2)
