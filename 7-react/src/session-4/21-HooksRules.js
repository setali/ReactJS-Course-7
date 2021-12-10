import { useEffect, useState } from 'react'

export default function HooksRules () {
  const [count, setCount] = useState(0)

  //   if (count % 2) {
  //     return 'salam'
  //   }

  //   if (true) {
  //     const [ali, setAli] = useState(0)
  //   }

  //   function func () {
  //     const [eli, setEli] = useState(0)
  //   }

  //   for (let index = 0; index < 5; index++) {
  //     const [qoli, setQoli] = useState(0)
  //   }

  useEffect(() => {
    // const [value, setValue] = useState(0)
  }, [])

  return <div>{count}</div>
}
