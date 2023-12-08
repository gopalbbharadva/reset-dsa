// Problem: Rotate array by K elements
//[1,2,3,4,5]

// Right shift
const rotateArrayToLeftByKplaces = (arr, k) => {
  let temp = []
  for (let i = arr.length - k; i < arr.length; i++) {
    temp.push(arr[i])
  }
  for (let i = arr.length - k - 1; i >= 0; i--) {
    arr[i + k] = arr[i]
  }
  for (let j = 0; j < temp.length; j++) {
    arr[j] = temp[j]
  }
  return arr
}

console.log(rotateArrayToLeftByKplaces([1, 2, 3, 4, 5], 2), '--> right shift')

// left shift
const rotateArrayToTheRightByKplaces = (arr, k) => {
  let temp = []
  for (let i = k - 1; i >= 0; i--) {
    temp.push(arr[i])
  }
  for (let i = k; i < arr.length; i++) {
    arr[i - k] = arr[i]
  }
  for (let i = 0; i < temp.length; i++) {
    arr[i + k - 1] = temp[i]
  }
  return arr
}

console.log(
  rotateArrayToTheRightByKplaces([1, 2, 3, 4, 5], 2),
  '--> left shift'
)
