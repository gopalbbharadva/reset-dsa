// !! 1. Print something n times using recursion
// const printUsingRecursion = (num) => {
//   if (num === 0) {
//     return
//   } else {
//     console.log('hello')
//     printUsingRecursion(num - 1)
//   }
// }

// printUsingRecursion(5)

// !! 2. Print 1 to N using recursion

// const print1ToN = (num) => {
//   if (num === 0) {
//     return
//   } else {
//     print1ToN(num - 1)
//     console.log(num, 'num')
//   }
// }

// print1ToN(5)

// !! 3. Print N to 1 using recursion

// const printNTo1 = (num) => {
//   if (num === 0) {
//     return
//   } else {
//     console.log(num, 'num')
//     printNTo1(num - 1)
//   }
// }

// printNTo1(5)

// !! 4. Sum of first N numbers

// const sumOfNNumbers = (num) => {
//   if (num === 1) {
//     return num
//   } else {
//     console.log(num, 'num')
//     return num + sumOfNNumbers(num - 1)
//   }
// }

// const res = sumOfNNumbers(5)
// console.log(res, 'res')

// !! 5. Factorial of N numbers

// const factorial = (num) => {
//   if (num === 1) {
//     return 1
//   } else {
//     return num * factorial(num - 1)
//   }
// }

// const res = factorial(5)
// console.log(res, 'res')

// !! 6. Reverse an array using recursion

// Two pointer approach
// const reverseArr = (arr) => {
//   let lp = 0,
//     rp = arr.length - 1
//   while (lp < rp) {
//     ;[arr[lp], arr[rp]] = [arr[rp], arr[lp]]
//     lp++
//     rp--
//   }
//   console.log(arr, 'arr')
// }

// reverseArr([1, 2, 3, 4, 5])

// Using recursion
// &1 const reverseRecursion = (arr, count, arr2) => {
//   if (count === arr.length - 1) {
//     return count
//   } else {
//     reverseRecursion(arr, ++count, arr2)
//     arr2.push(arr[count])
//   }
//   return arr2
// }

// const res = reverseRecursion([1, 2, 3, 4, 5], -1, [])
// console.log(res, 'res')

// &2 
const reverseAnArrUsingRecursion = (arr, start, end) => {
  if (start > end) {
    return
  } else {
    const temp = arr[start]
    arr[start] = arr[end]
    arr[end] = temp
    reverseAnArrUsingRecursion(arr, ++start, --end)
  }
  console.log(arr, 'arr')
}

const arr = [1, 2, 3, 4, 5]
reverseAnArrUsingRecursion(arr, 0, arr.length - 1)
