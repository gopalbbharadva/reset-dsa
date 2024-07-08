//1. Problem Statement: Given an integer N, return the number of digits in N.

// const countDigits = (n) => {
//   let count = 0
//   while (n > 0) {
//     n = Math.round(n / 10)
//     count++
//   }
//   return count
// }
// const res = countDigits(1234)
// console.log(res, 'res')

// *************
//2. Problem Statement: Given an integer N return the reverse of the given number.

// const reverseNumber = (n) => {
//   let temp = n
//   let revNum = 0
//   while (temp > 0) {
//     const t = temp % 10
//     revNum = revNum * 10 + t
//     temp = Math.floor(temp / 10)
//   }
//   return revNum
// }

// const res = reverseNumber(10000)

// *************
//3. Problem Statement: Given an integer N, return true if it is a palindrome else return false.

// const isNumberPalindrome = (num) => {
//   let temp = num
//   let newNum = 0
//   while (temp > 0) {
//     const t = temp % 10
//     newNum = newNum * 10 + t
//     temp = Math.round(temp / 10)
//   }
//   if (newNum === num) {
//     return "it's a palindrome number"
//   }
//   return 'Not a palindrome numebr'
// }

// const res = isNumberPalindrome(343)
