// const arr = [1, 1, 2, 3, 2, 4, 4, 4]
// const query = [1, 2, 3, 4]

// const basicHashing = () => {
//   const newArr = Array(5).fill(0)
//   for (let i = 0; i < arr.length; i++) {
//     newArr[arr[i]]++
//   }
//   console.log(newArr[4], 'res')
// }

// basicHashing()

// const str = 'abcdcead'

// const sam = () => {
//   const obj = {}
//   for (let i = 0; i < str.length; i++) {
//     if (obj[str[i]]) {
//       obj[str[i]] = obj[str[i]] + 1
//     } else {
//       obj[str[i]] = 1
//     }
//   }
// }

// sam()

// !! 1. Find the highest/lowest frequency element

// Better approach
// const highFrequencyElement = (arr) => {
//   const max = Math.max(...arr)
//   let maxFrequentNumber = 0
//   const freqArr = Array(max + 1).fill(0)
//   for (let i = 0; i < arr.length; i++) {
//     freqArr[arr[i]]++
//   }
//   for (let i = 0; i < freqArr.length; i++) {
//     if (freqArr[i] > freqArr[maxFrequentNumber]) {
//       maxFrequentNumber = i
//     }
//   }
//   return maxFrequentNumber
// }

// const res = highFrequencyElement([10, 12, 10, 15, 10, 3, 3, 3, 3])
// console.log(res, 'res')
// TC = O(n)

// Better approach
// const lowFrequencyElement = (arr) => {
//   const max = Math.max(...arr)
//   let minFrequentNumber = max
//   const freqArr = Array(max + 1).fill(0)
//   for (let i = 0; i < arr.length; i++) {
//     freqArr[arr[i]]++
//   }
//   for (let i = 0; i < freqArr.length; i++) {
//     if (freqArr[i] < freqArr[minFrequentNumber]) {
//       minFrequentNumber = i
//     }
//   }
//   return minFrequentNumber
// }

// const res = lowFrequencyElement([0, 0, 1, 2, 2, 3, 1])
// console.log(res, 'res')
