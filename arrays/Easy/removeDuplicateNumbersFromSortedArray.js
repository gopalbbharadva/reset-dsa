// Problem: Remove Duplicates in-place from Sorted Array

const removeDuplicatedFromSortedArray = (arr) => {
  let i = 0
  for (let j = 1; j < arr.length; j++) {
    if (arr[j] !== arr[i]) {
      i++
      arr[i] = arr[j]
    }
  }
  return i + 1
}

console.log(removeDuplicatedFromSortedArray([1, 1, 2, 2, 3, 3, 3]))
