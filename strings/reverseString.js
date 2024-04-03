// Problem : Reverse a given string

const reverseString = (strArr) => {
  let temp = ''
  for (let i = strArr.length - 1; i >= 0; i--) {
    temp += strArr[i]
  }
  return temp
}

console.log(reverseString('hello'), 'result')
