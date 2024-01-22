// Problem Statement: Given a number N reverse the number and print it.
// Example 1:
// Input: N = 123
// Output: 321
// Explanation: The reverse of 123 is 321

// Constraints:

// -231 <= x <= 231 - 1

const reverseNumber = (n) => {
  let temp = 0
  const max = Math.pow(2, 31) - 1
  const min = -Math.pow(2, 31)
  while (n != 0) {
    const rem = n % 10
    temp = temp * 10 + rem
    n = (n / 10).toString().split('.')[0]
  }
  return temp <= max && temp >= min ? temp : n
}

console.log(reverseNumber(1534236469), 'temp')
