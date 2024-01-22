// Problem Statement: Given an integer N,
// write a program to count the number of digits in N.

// Example 1:
// Input: N = 12345
// Output: 5
// Explanation: N has 5 digits

const countDigits = (n) => {
  let count = 0
  while (n != 0) {
    count++
    n = (n / 10).toFixed(0)
  }
  return count
}

console.log(countDigits(12345), 'count digits')
