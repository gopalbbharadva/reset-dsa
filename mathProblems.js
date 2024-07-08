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

// *************
//4. Problem Statement: Given two integers N1 and N2, find their greatest common divisor.

// !! Brute Force approach
// const findGcd = (n1, n2) => {
//   const minValue = Math.min(n1, n2)
//   let gcd = 0
//   for (let i = 1; i <= minValue; i++) {
//     if (n1 % i === 0 && n2 % i === 0) {
//       if (gcd < i) {
//         gcd = i
//       }
//     }
//   }
//   return gcd
// }

// const res = findGcd(5, 13)

// !! Better approach
// && Explanation
/**
 * As we are finding the greatest common divisor, our gcd will be
 * near to the minimum(n1,n2)
 * For ex: n1= 5, n2=15, GCD =5 will near to the 5 instead of 1 ,
 * so we can iterate from minimum to 1. so our iterations will reduce.
 */

// const findGcdBetterApproach = (n1, n2) => {
//   const minValue = Math.min(n1, n2)
//   for (let i = minValue; i >= 1; i--) {
//     if (n1 % i == 0 && n2 % i == 0) {
//       return i
//     }
//   }
//   return 1
// }

// const res = findGcdBetterApproach(5, 15)
// console.log(res, 'res')
