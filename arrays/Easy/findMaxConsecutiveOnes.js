// Problem: Count Maximum Consecutive One’s in the array
// [1,1,0,1,0,1,1,1]

const findMaxConsecutiveOnes = (arr) => {
  let count = 0
  let temp = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      temp++
    }
    if (temp > count) {
      count = temp
    }
    if (arr[i] === 0) {
      temp = 0
    }
  }
  console.log(count, 'count')
}

console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0]))
