// Problem : Find the index of the first occurrence in a string

const findTheIndexOfFirstOccurrence = (pStr, cStr) => {
  let flag = true
  for (let i = 0; i < pStr.length - cStr.length + 1; i++) {
    flag = true
    for (let j = 0; j < cStr.length; j++) {
      if (pStr[i + j] !== cStr[j]) {
        flag = false
        break
      }
      if (flag) {
        return i
      }
    }
  }
  return -1
}

console.log(findTheIndexOfFirstOccurrence('butnotsad', 'sad'), 'res')
