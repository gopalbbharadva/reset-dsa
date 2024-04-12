// Given a positive integer millis, write an asynchronous
// function that sleeps for millis milliseconds. It can resolve any value.

const sleep = async (limit) => {
  const res = await new Promise((res) =>
    setTimeout(() => res('success'), limit)
  )
  return res
}

sleep(2000)
  .then((res) => console.log(res, 'res'))
  .catch((err) => console.log(err, 'err'))
