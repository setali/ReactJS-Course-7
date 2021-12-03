import { useEffect, useState } from 'react'

export default function Counter () {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log('In interval', count)
      setCount(s => s + 1)
    }, 1000)

    console.log('Mount', intervalId, count)
    // return () => {
    //   clearInterval(intervalId)
    //   console.log('UnMount', intervalId, count)
    // }
  }, [])

  return <div>{count}</div>
}
