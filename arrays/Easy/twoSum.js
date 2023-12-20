// Problem: Two Sum : Check if a pair with given sum exists in Array

// Brute force approach
// const isTwoSumAvailable = (arr, target) => {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === target) {
//         return 1
//       }
//     }
//   }
//   return -1
// }

// console.log(isTwoSumAvailable([2, 6, 5, 8, 11], 14), 'result')

// Better approach
const twoSumOptimalApproach = (arr, target) => {
  const map = new Map()
  for (let i = 0; i < arr.length; i++) {
    const temp = target - arr[i]
    if (map.has(temp)) {
      return [map.get(temp), i]
    } else {
      map.set(arr[i], i)
    }
  }
  return false
}

console.log(twoSumOptimalApproach([2, 3, 4, 5, 6, 8, 11], 19), 'res')
