// Find Second Smallest and Second Largest Element in an array

const findLargestElement = (arr) => {
  let largestElement = arr[0]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestElement) {
      largestElement = arr[i]
    }
  }
  return largestElement
}

const findSmallestElement = (arr) => {
  let smallestElement = arr[0]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallestElement) {
      smallestElement = arr[i]
    }
  }
  return smallestElement
}

const findSecondLargestAndSecondSmallestElement = (arr) => {
  const smallestElement = findSmallestElement(arr)
  const largestElement = findLargestElement(arr)
  let secondSmallest = Infinity
  let secondLargest = -Infinity
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < largestElement) {
      if (arr[i] > secondLargest) {
        secondLargest = arr[i]
      }
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > smallestElement) {
      if (arr[i] < secondSmallest) {
        secondSmallest = arr[i]
      }
    }
  }
  return [secondLargest, secondSmallest]
}
console.log(findSecondLargestAndSecondSmallestElement([3, 1, 2, 5, 6]))
