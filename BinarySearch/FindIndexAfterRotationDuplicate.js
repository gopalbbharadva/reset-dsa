// There is an integer array nums sorted in non-decreasing order
// (not necessarily with distinct values).

// Before being passed to your function, nums is rotated at an unknown
// pivot index k (0 <= k < nums.length) such that the resulting array is
// [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed).

// For example, [0,1,2,4,4,4,5,6,6,7] might be rotated at pivot index 5 and become
// [4,5,6,6,7,0,1,2,4,4].

// Given the array nums after the rotation and an integer target, return
// true if target is in nums, or false if it is not in nums.

const checkArraySorted = (arr, low, high) => {
  //   console.log(high, 'high')
  let isArraySorted = true
  for (let i = low; i <= high; i++) {
    if (arr[i] > arr[i + 1]) {
      isArraySorted = false
    }
  }
  console.log(isArraySorted, 'sorted')
  return isArraySorted
}

const binarySearch = (arr, low, high, t) => {
  console.log(low, 'low ele')
  console.log(high, 'high ele')
  if (low > high) return false
  const mid = Math.floor((low + high) / 2)
  console.log(mid, 'mid ele')
  if (arr[mid] === t) return true
  if (arr[low] === arr[mid] && arr[mid] === arr[high]) {
    return binarySearch(arr, low + 1, high - 1, t)
  }
  //   Left part is sorted
  else if (arr[low] <= arr[mid]) {
    console.log('else if******')
    if (arr[low] <= t && t <= arr[mid]) {
      return binarySearch(arr, low, mid - 1, t)
    } else {
      console.log('else ')
      return binarySearch(arr, mid + 1, high, t)
    }
  }
  //   Right part is sorted
  else {
    console.log('else*******************')
    if (arr[mid] <= t && t <= arr[high]) {
      console.log('right if')
      return binarySearch(arr, mid + 1, high, t)
    } else {
      console.log('right else')
      //   console.log(mid,'mid(')
      return binarySearch(arr, low, mid - 1, t)
    }
  }
  //   console.log(arr[low],'low ele')
  //   console.log(arr[mid],'mid ele')
  //   console.log(arr[high],'high ele')
}

const findIndexAfterRotationWithDuplicateElements = (arr, t) => {
  const res = binarySearch(arr, 0, arr.length - 1, t)
  console.log(res, 'res')
}
// findIndexAfterRotationWithDuplicateElements([4, 1, 2, 3, 4], 0)
// findIndexAfterRotationWithDuplicateElements([1, 0, 1, 1, 1], 1)
findIndexAfterRotationWithDuplicateElements([3, 1], 1)
