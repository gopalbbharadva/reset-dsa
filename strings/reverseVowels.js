// Given a string s, reverse only all the vowels in the string and return it.

const reverseVowels = (str1) => {
  let left = 0
  right = str1.length - 1
  const str = str1.split('')
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  while (left < right) {
    while (left < right && !vowels.includes(str[left])) {
      left++
    }
    while (left < right && !vowels.includes(str[right])) {
      right--
    }
    ;[str[left], str[right]] = [str[right], str[left]]
    right--
    left++
  }
  return str
}

reverseVowels('leetcode')
