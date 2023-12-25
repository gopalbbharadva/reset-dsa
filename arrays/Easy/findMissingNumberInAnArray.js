// Problem: Find missing number in an array
// Input : arr = [1,3,4,5], n=5
// Output: [2]

// Brute-force approach
// const arr = [1, 2, 4, 5, 6]
// const findMissingNumberInAnArray = (arr, n) => {
//   let sum = 0
//   let targetSum = 0
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i]
//   }
//   for (let i = 1; i <= n; i++) {
//     targetSum += i
//   }
//   return targetSum - sum
// }

// console.log(findMissingNumberInAnArray(arr, 6), 'res')

// Better approach
const findMissingNumber = (arr, size) => {
  let temp = []
  // first assign initial 0 to till size.
  for (let i = 1; i <= size; i++) {
    temp[i] = 0
  }

  // then increment initial 0 with 1 for every count of that number.
  for (i = 0; i < size; i++) {
    if (!arr[i]) continue
    temp[arr[i]]++
  }

  // return the index for which still we have initial count 0
  for (let i = 0; i < temp.length; i++) {
    if (temp[i] === 0) return i
  }
}
console.log(findMissingNumber([1, 3, 4, 5], 5))
