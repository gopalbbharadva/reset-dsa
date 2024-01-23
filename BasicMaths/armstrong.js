// Problem Statement: Given a number, check if it is Armstrong Number or Not.
// Example 1:
// Input:153
// Output: Yes, it is an Armstrong Number
// Explanation: 1^3 + 5^3 + 3^3 = 153

const armstrongNumber = (n) => {
  let temp = 0
  let originalNumber = n
  while (n != 0) {
    const rem = n % 10
    temp += rem * rem * rem
    n = (n / 10).toString().split('.')[0]
  }
  if (originalNumber === temp) {
    return 'Yes, it is an Armstrong Number'
  }
  return 'No, it is not an Armstrong Number'
}

console.log(armstrongNumber(1))
