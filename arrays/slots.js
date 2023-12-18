const arr1 = [
  { start: '10:00', end: '11:00' },
  { start: '11:00', end: '12:00' },
  { start: '12:00', end: '13:00' },
]
const arr2 = [
  { start: '10:30', end: '11:30' },
  { start: '11:30', end: '12:30' },
  { start: '12:30', end: '13:30' },
]

let arr = [
  { start: '10:00', end: '11:00' },
  { start: '11:00', end: '12:00' },
  { start: '11:30', end: '12:30' },
  { start: '12:30', end: '13:30' },
  { start: '12:50', end: '13:00' },
  { start: '13:30', end: '14:30' },
]

const removeOverlaps = () => {
  let i = 0
  for (let j = 1; j < arr.length; j++) {
    const { start, end } = arr[i]
    const endHour = end.split(':')[0]
    const { start: start2, end: end2 } = arr[j]
    const start2Hour = start2.split(':')[0]
    if (endHour > start2Hour) {
      arr.splice(j, 1)
      arr.splice(i, 1)

      // Step 2: Insert the new element at the index of the first item removed
      arr.splice(i, 0, { start, end: end2 })
      j--
    } else {
      console.log('else')
      i++
    }
  }
  console.log(arr, 'result')
}
removeOverlaps()
