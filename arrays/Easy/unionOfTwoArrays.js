// Problem Statement: Given two sorted arrays, arr1,
// and arr2 of size n and m. Find the union of two sorted arrays.

// Input: arr1=[1,2,3,4,5], arr2=[2,3,4,4,5]

// const arr1 = [1, 2, 3, 4, 5]
// const arr2 = [2, 3, 4, 4, 5, 6, 9]

// find union with any type of arrays.

const findUnionOfTwoArray = (arr1, arr2) => {
  const temp = [...arr1, ...arr2]
  const map = new Map()
  let result = []

  for (let i of temp) {
    map.set(i, map.has(i) ? map.get(i) + 1 : 1)
  }

  for (let [key] of map) {
    result.push(key)
  }
  return result
}

console.log(findUnionOfTwoArray([1, 2, 3, 4, 5], [2, 3, 4, 4, 5, 6, 9]))

// find union with sorted arrays only.
const findUnionWithSortedArray = (arr1, arr2) => {
  let vector = []
  let i = 0,
    j = 0

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      if (vector[vector.length - 1] !== arr1[i]) {
        vector.push(arr1[i])
      }
      i++
    }
    if (arr1[i] > arr2[j]) {
      if (vector[vector.length - 1] !== arr1[i]) {
        vector.push(arr1[i])
      }
      j++
    }
  }

  while (i < arr1.length) {
    if (vector[vector.length - 1] !== arr1[i]) {
      vector.push(arr1[j])
    }
    i++
  }

  while (j < arr2.length) {
    if (vector[vector.length - 1] !== arr2[i]) {
      vector.push(arr2[j])
    }
    j++
  }

  return vector
}

console.log(findUnionWithSortedArray([1, 2, 3, 3, 3], [4, 5, 6, 7]))
