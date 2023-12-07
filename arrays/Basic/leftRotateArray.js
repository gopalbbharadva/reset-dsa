// Problem: Left Rotate the Array by One

const rotateLeftArrayByOne = (arr) => {
  let result = []
  const temp = arr[0]
  for (let i = 0; i < arr.length; i++) {
    if (i !== arr.length - 1) result[i] = arr[i + 1]
  }
  result.push(temp)
  return result
}

console.log(rotateLeftArrayByOne([1, 2, 3, 4, 5]))
