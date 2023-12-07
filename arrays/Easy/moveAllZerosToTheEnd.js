// Problem: Move all Zeros to the end of the array
// [1,0,0,2,3,0,4,0]

const moveAllZerosToEnd = (arr) => {
  let firstPointer = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      firstPointer = i
      break
    }
  }

  for (let j = firstPointer + 1; j < arr.length; j++) {
    if (arr[j] !== 0) {
      arr[firstPointer] = arr[j]
      arr[j] = 0
      firstPointer++
    }
  }
  return arr
}

moveAllZerosToEnd([1, 0, 2, 3, 4, 5, 0, 4, 0, 0, 5, 6, 0, 0])
