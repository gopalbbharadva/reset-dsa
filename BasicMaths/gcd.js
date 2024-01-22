// Problem Statement: Find the gcd of two numbers.

// Example 1:
// Input: num1 = 4, num2 = 8
// Output: 4
// Explanation: Since 4 is the greatest number which divides both num1 and num2.

const findGCD = (n1, n2) => {
  let biggerFactor = 0
  for (let i = 0; i < 10; i++) {
    if (n1 % i === 0 && n2 % i === 0) {
      if (biggerFactor < i) {
        biggerFactor = i
      }
    }
  }
  return biggerFactor
}

console.log(findGCD(3, 6), 'res')
