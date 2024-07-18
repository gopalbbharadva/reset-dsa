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

// &2 using same array as input
// const reverseAnArrUsingRecursion = (arr, start, end) => {
//   if (start > end) {
//     return
//   } else {
//     const temp = arr[start]
//     arr[start] = arr[end]
//     arr[end] = temp
//     reverseAnArrUsingRecursion(arr, ++start, --end)
//   }
// }

// const arr = [1, 2, 3, 4, 5]
// reverseAnArrUsingRecursion(arr, 0, arr.length - 1)

// !! 6. Check if the given String is Palindrome or not

// &1. Brute-force : Palindrome string check
// const palindromeString = (str) => {
//   let str2 = []
//   for (let i = str.length; i >= 0; i--) {
//     str2[i] = str[i]
//   }
//   str2 = str2.join('')
//   if (str2 === str) {
//     return "It's a palindrome string"
//   }
//   return 'Not palindrome string'
// }

// const str = palindromeString('abcdcba')
// console.log(str, 'str')

// &2. Two pointer : Palindrome string check
// const palindromeCheckTwoPointer = (str) => {
//   let i = 0,
//     j = str.length - 1
//   let flag = false

//   while (i < j) {
//     if (str[i] === str[j]) {
//       i++
//       j--
//       flag = true
//     }
//     break
//   }
//   return flag
// }

// const res = palindromeCheckTwoPointer('abcdcba')
// console.log(res, 'res')

// &3. Recursion : Palindrome string check
// const alphaNumeric = (char) => {
//   const regex = /^[a-z]+$/
//   const temp = regex.test(char)
//   return temp
// }

// const recursionPalindrome = (str, i, j, flag) => {
//   if (i > j) {
//     return flag
//   } else {
//     if (!alphaNumeric(str[i])) {
//       return recursionPalindrome(str, ++i, j, flag)
//     } else if (!alphaNumeric(str[j])) {
//       return recursionPalindrome(str, i, --j, flag)
//     } else if (str[i].toLowerCase() !== str[j].toLowerCase()) {
//       flag = false
//       return flag
//     } else {
//       return recursionPalindrome(str, ++i, --j, flag)
//     }
//   }
// }
// const s1 = 'A man, a plan, a canal: Panama'
// const res = recursionPalindrome(s1, 0, s1.length - 1, false)
