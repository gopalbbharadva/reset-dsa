// Problem Statement: Find the gcd of two numbers.

// Example 1:
// Input: num1 = 4, num2 = 8
// Output: 4
// Explanation: Since 4 is the greatest number which divides both num1 and num2.

// Brute force
const findGCD = (n1, n2) => {
  let biggerFactor = 0
  for (let i = 1; i <= Math.min(n1, n2); i++) {
    if (n1 % i === 0 && n2 % i === 0) {
      biggerFactor = i
    }
  }
  return biggerFactor
}

// Optimal
const findGCDWithOptimalApproach = (n1, n2) => {
  let temp = 0
  while (n1 > 0 || n2 > 0) {
    if (n1 > n2) {
      n1 = n1 % n2
    } else {
      n2 = n2 % n1
    }
    if (n1 === 0) {
      temp = n2
      break
    }
    if (n2 === 0) {
      temp = n1
      break
    }
  }
  return temp
}

// console.log(findGCDWithOptimalApproach(5, 10), '***')

const findGCDWithRecursion = (n1, n2) => {
  // let
  if (n1 === 0 || n2 === 0) {
    return n1
  } else {
    if (n1 > n2) {
      return findGCDWithRecursion(n2, n1 % n2)
    } else {
      return findGCDWithRecursion(n1, n2 % n1)
    }
  }
}

console.log(findGCDWithRecursion(22, 33))

// console.log(findGCD(4, 8), 'res')
