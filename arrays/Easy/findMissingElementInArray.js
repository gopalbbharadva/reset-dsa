// Problem: Find the missing number in an array
// arr = [1,3] n= 3

const findMissingNumber = (arr, N) => {
  const p1 = new Array(N).fill(0)

  for (let i = 0; i < arr.length; i++) {
    p1[arr[i] - 1]++
  }

  for (let i = 0; i < p1.length; i++) {
    if (p1[i] === 0) {
      return i + 1
    }
  }
}

console.log(findMissingNumber([1, 3], 3), 'result')
