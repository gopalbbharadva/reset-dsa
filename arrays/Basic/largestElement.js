//  Problem : Find the Largest element in an array

const findLargestElement = (arr) => {
  let largestElement = arr[0]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestElement) {
      largestElement = arr[i]
    }
  }
  return largestElement
}

console.log(findLargestElement([1, 2, 3, 4, 5]), 'largest')
