// Problem : Reverse a given string

// 1st approach
const reverseString = (strArr) => {
  let temp = ''
  for (let i = strArr.length - 1; i >= 0; i--) {
    temp += strArr[i]
  }
  return temp
}

// 2nd approach
const reverseString2 = (str) => {
  let left = 0,
    right = str.length - 1
  while (left < right) {
    const temp = str[right]
    str[right] = str[left]
    str[left] = temp
    right--
    left++
  }
  return str
}

console.log(reverseString2(['h', 'e', 'l', 'l', 'o']), 'result')
