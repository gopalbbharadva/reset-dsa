// Problem : Intersection of two arrays

const findInterSection = (arr1, arr2) => {
  let temp = []

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        if (temp[temp.length - 1] !== arr1[i]) {
          temp.push(arr1[i])
        }
      }
    }
  }
  console.log(temp,'temp')
//   return temp
}

findInterSection([1,2,2,1], [1,2])
