// Example 1:
// Input: N = 123
// Output: Not Palindrome Number
// Explanation: 123 read backwards is 321.
// Since these are two different numbers 123 is not a palindrome.

const palindromeNumber = (n) => {
  let reverseNumber = 0
  let temp = n
  while (temp != 0) {
    const rem = temp % 10
    reverseNumber = reverseNumber * 10 + rem
    temp = (temp / 10).toString().split('.')[0]
  }
  if (reverseNumber === n && n >= 0) {
    return true
  }
  return false
}

console.log(palindromeNumber(-121), 'palindrome')
