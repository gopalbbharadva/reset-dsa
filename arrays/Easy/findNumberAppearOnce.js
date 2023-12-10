// Problem: Find the number that appears once, and the other numbers twice
// Input :  [4,1,2,1,2]
// Input :  4

// Approach using the map
// const findNumberAppearOnce = (arr) => {
//   const m1 = new Map()
//   for (let i = 0; i < arr.length; i++) {
//     if (m1.has(arr[i])) {
//       m1.set(arr[i], m1.get(arr[i]) + 1)
//     } else {
//       m1.set(arr[i], 1)
//     }
//   }

//   for (let [key, value] of m1) {
//     if (value === 1) {
//       return key
//     }
//   }
// }

// console.log(findNumberAppearOnce([4, 4, 2, 1, 2]), 'result')

// Approach using the array
const findNumberAppearOnce = (arr) => {
  let num = 0
  for (let i = 0; i < arr.length; i++) {
    // for every new element we will declare the count with 0
    let count = 0
    // checking and increasing count value by 1
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++
      }
    }
    // if we found count with 1 then we will return
    if (count === 1) {
      num = arr[i]
    }
  }
  console.log(num, 'num')
}

findNumberAppearOnce([2, 1, 1, 4, 4])
